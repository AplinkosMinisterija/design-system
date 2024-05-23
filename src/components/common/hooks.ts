import { useEffect, useRef, useState } from 'react';
import { intersectionObserverConfig } from '../../utils';
import { getFilteredOptions, handleResponse } from '../common/functions';

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
  optionsKey,
  serverErrors,
  validationMessages,
}: any) => {
  const [input, setInput] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const observerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [suggestions, setSuggestions] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);


  useEffect(() => {
    if (showSelect) {
      handleLoadData('', 1);
    }
  }, [showSelect]);

  useEffect(() => {
    if (!dependantValue) return;

    handleLoadData('', 1);
  }, [JSON.stringify(dependantValue)]);

  const handleLoadData = async (input: string, page: number) => {
    setLoading(true);
   await handleResponse({
      serverErrors,
      validationMessages,
      endpoint: () => loadOptions(input, page, dependantValue),
      onSuccess: (response: any) => {
        setCurrentPage(response.page);

        const data = !!response?.[optionsKey] ? response?.[optionsKey] : response;
        const isFirstPage = response?.page === 1;

        setSuggestions(isFirstPage ? data : [...suggestions, ...data]);

        setHasMore(response?.page < response?.totalPages);
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    const currentObserver = observerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore && !loading) {
        handleLoadData(input, currentPage + 1);
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
  }, [hasMore, loading]);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
      setInput('');
    }
  };

  const handleClick = (option: any) => {
    setShowSelect(false);
    setInput('');
    setSuggestions([]);
    setCurrentPage(1);
    onChange(option);
  };

  const handleToggleSelect = () => {

    !disabled && setShowSelect(!showSelect);
  };

  const handleInputChange = async (input: string) => {
    setShowSelect(true);
    setInput(input);
    await handleLoadData(input, 1);
  };

  return {
    loading,
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
