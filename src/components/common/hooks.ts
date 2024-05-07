import { useEffect, useState } from 'react';
import { getFilteredOptions, handleResponse } from '@/components/common/functions';

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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [suggestions, setSuggestions] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);
  const [input, setInput] = useState('');
  const [showSelect, setShowSelect] = useState(false);

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

  useEffect(() => {
    if (!(suggestions || []).length && showSelect) {
      handleLoadData('', 1);
    }
  }, [showSelect]);

  useEffect(() => {
    if (!dependantValue) return;

    handleLoadData('', 1);
  }, [JSON.stringify(dependantValue)]);

  const handleLoadData = async (input: string, page: number, lazyLoading = false) => {
    setLoading(true);
    handleResponse({
      serverErrors,
      validationMessages,
      endpoint: () => loadOptions(input, page, dependantValue),
      onSuccess: (response: any) => {
        setCurrentPage(response.page);

        const data = response?.[optionsKey] ? response?.[optionsKey] : response;

        setSuggestions(lazyLoading ? [...suggestions, ...data] : data);

        setHasMore(response?.page < response?.totalPages);
        setLoading(false);
      },
    });
  };

  const handleScroll = async (e: any) => {
    const element = e.currentTarget;
    const isTheBottom =
      Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <= 1;

    if (isTheBottom && hasMore && !loading) {
      handleLoadData(input, currentPage + 1, true);
    }
  };

  const handleToggleSelect = () => {
    !disabled && setShowSelect(!showSelect);
  };

  const handleInputChange = (input: string) => {
    setShowSelect(true);
    handleLoadData(input, 1);
    setInput(input);
  };

  return {
    loading,
    suggestions,
    handleScroll,
    input,
    handleInputChange,
    handleToggleSelect,
    showSelect,
    handleBlur,
    handleClick,
  };
};
