import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
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

    if (getOptionLabel(value) === getOptionLabel(option)) return;

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
}: any) => {
  const [input, setInput] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const observerRef = useRef(null);

  const fetchData = async (page: number) => {
    const data = await loadOptions(input, page, dependantValue);

    if (data?.[optionsKey]) {
      return {
        data: data?.[optionsKey],
        page: data.page < data.totalPages ? data.page + 1 : undefined,
      };
    }

    return {
      data,
      page: undefined,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: [name, input],
    initialPageParam: 1,
    queryFn: ({ pageParam }: any) => fetchData(pageParam),
    getNextPageParam: (lastPage) => lastPage.page,
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
    setShowSelect(!!input);
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
