import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState, JSX } from 'react';
import { intersectionObserverConfig } from '../../utils';
import { getFilteredOptions } from './functions';

interface UseSelectDataProps {
  options: any[];
  disabled?: boolean;
  onChange: (option: any) => void;
  getOptionLabel: (option: any) => string | JSX.Element;
  refreshOptions?: (dependantId: any) => Promise<void>;
  dependantId?: any;
  value?: any;
}

export const useSelectData = ({
  options,
  disabled,
  onChange,
  getOptionLabel,
  refreshOptions,
  dependantId,
  value,
}: UseSelectDataProps) => {
  const [input, setInputValue] = useState<any>(null);
  const [showSelect, setShowSelect] = useState(false);
  const [suggestions, setSuggestions] = useState(options);
  const [loading, setLoading] = useState(false);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
      setInputValue('');
    }
  };

  const handleSetOptions = useCallback(async () => {
    if (!refreshOptions) return;
    setLoading(true);
    await refreshOptions(dependantId);
    setLoading(false);
  }, [refreshOptions, dependantId]);

  useEffect(() => {
    if (!showSelect || options?.length) return;
    handleSetOptions();
  }, [showSelect, handleSetOptions, options?.length]);

  useEffect(() => {
    if (typeof dependantId === 'undefined') return;
    handleSetOptions();
  }, [dependantId, handleSetOptions]);

  useEffect(() => {
    const canClearValue =
      !disabled && dependantId && !options?.some((option) => option?.id === value?.id);

    if (canClearValue) {
      onChange(null);
    }

    setSuggestions(options);
  }, [options, disabled, dependantId, value?.id, onChange]);

  const handleClick = (option: any) => {
    setShowSelect(false);
    setInputValue('');

    if (value && getOptionLabel(value) === getOptionLabel(option)) return;

    onChange(option);
  };

  const handleOnChange = (input: string) => {
    if (!options) return;

    if (input) {
      setShowSelect(true);
    }
    setInputValue(input);
    setSuggestions(getFilteredOptions(options, input, getOptionLabel));
  };

  const handleToggleSelect = () => {
    !disabled && setShowSelect(!showSelect);
  };

  return {
    suggestions,
    input,
    handleToggleSelect,
    showSelect,
    handleBlur,
    handleClick,
    handleOnChange,
    loading,
  };
};

interface UseAsyncSelectDataProps {
  loadOptions: (input: string, page: number, dependantValue: any) => Promise<any>;
  disabled?: boolean;
  onChange: (option: any) => void;
  dependantValue?: any;
  name: string;
  optionsKey?: string;
  handleGetNextPageParam: (data: any) => number | null | undefined;
}

export const useAsyncSelectData = ({
  loadOptions,
  disabled,
  onChange,
  dependantValue,
  name,
  optionsKey,
  handleGetNextPageParam,
}: UseAsyncSelectDataProps) => {
  const [input, setInput] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const observerRef = useRef(null);

  const fetchData = async (page: number) => {
    const data = await loadOptions(input, page, dependantValue);
    const nextPage = handleGetNextPageParam(data);

    const formattedData = optionsKey ? (data?.[optionsKey as keyof typeof data] ?? data) : data;

    return {
      data: formattedData,
      nextPage: nextPage || undefined,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    enabled: showSelect,
    queryKey: [name, input],
    initialPageParam: 1,
    queryFn: ({ pageParam }: any) => fetchData(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    gcTime: 60000,
  });

  useEffect(() => {
    const currentObserver = observerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }, intersectionObserverConfig);

    if (currentObserver) {
      observer.observe(currentObserver);
    }

    return () => {
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, data]);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
      setInput('');
    }
  };

  const handleClick = (option: any) => {
    setShowSelect(false);
    setInput('');
    onChange(option);
  };

  const handleToggleSelect = () => {
    !disabled && setShowSelect(!showSelect);
  };

  const handleInputChange = (input: string) => {
    setShowSelect(!!input.length);
    setInput(input);
  };

  const suggestions = data
    ? data.pages
        .flat()
        .map((item) => item?.data)
        .flat()
    : [];

  return {
    loading: isFetching,
    suggestions,
    input,
    handleInputChange,
    handleToggleSelect,
    showSelect,
    handleBlur,
    observerRef,
    handleClick,
  };
};

/**
 * Debounce a rapidly-changing value (e.g. a search input) so downstream
 * effects — query keys, network requests — only react once typing settles.
 */
export const useDebouncedValue = <T>(value: T, delayMs = 300): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
};

/**
 * Debounce an async callback so only the last call within the delay window
 * runs. Resolves with the settled call's result; superseded and unmounted
 * calls resolve to undefined rather than rejecting, so callers do not need
 * to guard every await against cancellation.
 */
export const useDebouncedCallback = <TArgs extends any[], TResult>(
  callback: (...args: TArgs) => Promise<TResult> | TResult,
  delayMs = 300,
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const callIdRef = useRef(0);
  const mountedRef = useRef(true);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const cancel = useCallback(() => {
    clearTimeout(timerRef.current);
    callIdRef.current += 1;
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearTimeout(timerRef.current);
      callIdRef.current += 1;
    };
  }, []);

  const run = useCallback(
    (...args: TArgs): Promise<TResult | undefined> => {
      cancel();
      const callId = callIdRef.current;

      return new Promise((resolve, reject) => {
        timerRef.current = setTimeout(async () => {
          try {
            const result = await callbackRef.current(...args);
            const isStale = !mountedRef.current || callId !== callIdRef.current;
            resolve(isStale ? undefined : result);
          } catch (error) {
            if (!mountedRef.current || callId !== callIdRef.current) {
              resolve(undefined);
              return;
            }
            reject(error);
          }
        }, delayMs);
      });
    },
    [cancel, delayMs],
  );

  return Object.assign(run, { cancel });
};

export const useKeyAction = (action: (option?: any) => void, disabled = false) => {
  return useCallback(
    (option?: any) => (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !disabled) {
        e.stopPropagation();
        action(option);
      }
    },
    [action, disabled],
  );
};
