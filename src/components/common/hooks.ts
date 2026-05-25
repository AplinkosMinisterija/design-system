import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { intersectionObserverConfig } from '../../utils';
import { getFilteredOptions } from '../common/functions';

export const useSelectData = ({
  options,
  disabled,
  onChange,
  getOptionLabel,
  refreshOptions,
  dependantId,
  value,
}) => {
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

  const handleSetOptions = async () => {
    if (!refreshOptions) return;
    setLoading(true);
    await refreshOptions(dependantId);
    setLoading(false);
  };

  useEffect(() => {
    if (!showSelect || options?.length) return;
    handleSetOptions();
  }, [showSelect]);

  useEffect(() => {
    if (typeof dependantId === 'undefined') return;
    handleSetOptions();
  }, [dependantId]);

  useEffect(() => {
    const canClearValue =
      !disabled && dependantId && !options?.some((option) => option?.id === value?.id);

    if (canClearValue) {
      onChange(null);
    }

    setSuggestions(options);
  }, [options]);

  const handleClick = (option: any) => {
    setShowSelect(false);
    setInputValue('');

    if (value && getOptionLabel(value) === getOptionLabel(option)) return;

    onChange(option);
  };

  const handleOnChange = (input) => {
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

export const useAsyncSelectData = ({
  loadOptions,
  disabled,
  onChange,
  dependantValue,
  name,
  optionsKey,
  handleGetNextPageParam,
}) => {
  const [input, setInput] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const observerRef = useRef(null);

  const fetchData = async (page: number) => {
    const data = await loadOptions(input, page, dependantValue);
    const nextPage = handleGetNextPageParam(data);
    const formattedData = data?.[optionsKey] ?? data;

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

const TABLE_PAGE_SIZE_DEFAULT = 10;
const TABLE_PAGE_SIZE_EVENT = 'tablePageSize:change';

const getTablePageSizeStorageKey = (pageName: string) => `tablePageSize_${pageName}`;

export const useTablePageSize = (
  pageName: string = 'page',
): [number, (size: number) => void] => {
  const storageKey = getTablePageSizeStorageKey(pageName);

  const read = useCallback((): number => {
    if (typeof window === 'undefined') return TABLE_PAGE_SIZE_DEFAULT;
    const raw = window.localStorage.getItem(storageKey);
    const parsed = Number(raw);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : TABLE_PAGE_SIZE_DEFAULT;
  }, [storageKey]);

  const [pageSize, setLocalPageSize] = useState<number>(read);

  useEffect(() => {
    const sync = () => setLocalPageSize(read());
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey) sync();
    };
    const onCustom = (e: Event) => {
      if ((e as CustomEvent).detail?.storageKey === storageKey) sync();
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener(TABLE_PAGE_SIZE_EVENT, onCustom);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(TABLE_PAGE_SIZE_EVENT, onCustom);
    };
  }, [storageKey, read]);

  const setPageSize = useCallback(
    (size: number) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(storageKey, String(size));
        window.dispatchEvent(
          new CustomEvent(TABLE_PAGE_SIZE_EVENT, { detail: { storageKey } }),
        );
      }
      setLocalPageSize(size);
    },
    [storageKey],
  );

  return [pageSize, setPageSize];
};
