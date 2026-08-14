import { useInfiniteQuery } from '@tanstack/react-query';
import { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { intersectionObserverConfig } from '../../utils';
import { getFilteredOptions } from './functions';
import { SelectOption } from '../../types';

interface UseSelectDataProps<T extends SelectOption = SelectOption> {
  options: T[];
  disabled?: boolean;
  onChange: (option: T | null) => void;
  getOptionLabel: (option: T) => string | JSX.Element;
  refreshOptions?: (dependantId: string) => Promise<void>;
  dependantId?: string;
  value?: T;
}

export const useSelectData = <T extends SelectOption = SelectOption>({
  options,
  disabled,
  onChange,
  getOptionLabel,
  refreshOptions,
  dependantId,
  value,
}: UseSelectDataProps<T>) => {
  const [input, setInputValue] = useState<string>('');
  const [showSelect, setShowSelect] = useState(false);
  const [suggestions, setSuggestions] = useState(options);
  const [loading, setLoading] = useState(false);
  // -1 = nothing highlighted yet, so the first ArrowDown lands on option 0.
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
      setInputValue('');
      setActiveIndex(-1);
    }
  };

  const handleSetOptions = useCallback(async () => {
    if (!refreshOptions) return;
    setLoading(true);
    dependantId && (await refreshOptions(dependantId));
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

  const handleClick = (option: T) => {
    setShowSelect(false);
    setInputValue('');
    setActiveIndex(-1);

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
    // The filtered list is a different list — highlighting index 3 of the old
    // one would point at an unrelated option.
    setActiveIndex(-1);
  };

  const handleToggleSelect = () => {
    if (disabled) return;
    setShowSelect(!showSelect);
    setActiveIndex(-1);
  };

  /**
   * Keyboard handling for the combobox input, per the ARIA combobox pattern:
   * the list never takes focus, the input keeps it and points at the active
   * option through `aria-activedescendant`. Without this the options were
   * reachable only by Tab-stopping through every one of them.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    const lastIndex = suggestions.length - 1;

    const move = (next: number) => {
      event.preventDefault();
      if (!showSelect) setShowSelect(true);
      setActiveIndex(next);
    };

    switch (event.key) {
      case 'ArrowDown':
        return move(activeIndex >= lastIndex ? 0 : activeIndex + 1);
      case 'ArrowUp':
        return move(activeIndex <= 0 ? lastIndex : activeIndex - 1);
      case 'Home':
        return showSelect && move(0);
      case 'End':
        return showSelect && move(lastIndex);
      case 'Enter': {
        event.preventDefault();
        if (!showSelect) return setShowSelect(true);
        const active = suggestions[activeIndex];
        return active ? handleClick(active) : setShowSelect(false);
      }
      case 'Escape':
        if (!showSelect) return;
        event.preventDefault();
        setShowSelect(false);
        setActiveIndex(-1);
        return;
      default:
        return;
    }
  };

  return {
    suggestions,
    input,
    handleToggleSelect,
    showSelect,
    handleBlur,
    handleClick,
    handleOnChange,
    handleKeyDown,
    activeOption: suggestions[activeIndex],
    loading,
  };
};

interface UseAsyncSelectDataProps<T extends SelectOption = SelectOption> {
  loadOptions: (input: string, page: number, dependantValue?: string) => Promise<any>;
  disabled?: boolean;
  onChange: (option?: T | null) => void;
  dependantValue?: string;
  name: string;
  optionsKey?: string;
  handleGetNextPageParam: (data: any) => number | null | undefined;
}

export const useAsyncSelectData = <T extends SelectOption = SelectOption>({
  loadOptions,
  disabled,
  onChange,
  dependantValue,
  name,
  optionsKey,
  handleGetNextPageParam,
}: UseAsyncSelectDataProps<T>) => {
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
    queryFn: ({ pageParam }: { pageParam: number }) => fetchData(pageParam),
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

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
      setInput('');
    }
  };

  const handleClick = (option: T) => {
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

export function useKeyAction<T = any>(action: (option?: T) => void, disabled = false): any {
  return useCallback(
    (option?: T) => {
      if (typeof option === 'object' && option !== null && 'key' in option) {
        const e = option as unknown as React.KeyboardEvent;
        if (e.key === 'Enter' && !disabled) {
          e.stopPropagation();
          (action as any)();
        }
      } else {
        return (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' && !disabled) {
            e.stopPropagation();
            (action as any)(option);
          }
        };
      }
    },
    [action, disabled],
  );
}
