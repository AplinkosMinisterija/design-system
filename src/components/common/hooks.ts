import { useInfiniteQuery } from '@tanstack/react-query';
import { JSX, useCallback, useEffect, useId, useRef, useState } from 'react';
import { intersectionObserverConfig } from '../../utils';
import { getFilteredOptions } from './functions';
import { SelectOption } from '../../types';

interface UseOptionNavigationProps<T> {
  options: T[];
  disabled?: boolean;
  showSelect: boolean;
  setShowSelect: (show: boolean) => void;
  onSelect: (option: T) => void;
  /** Id of the listbox; option ids are derived from it. */
  listId: string;
}

/**
 * Keyboard handling for a combobox's option list, per the ARIA combobox
 * pattern: the list never takes focus, the input keeps it and points at the
 * active option through `aria-activedescendant`.
 *
 * Shared by the plain and the async select, which otherwise drift — the async
 * one had no keyboard navigation at all, so its options were reachable only by
 * Tab-stopping through every one of them.
 */
export const useOptionNavigation = <T,>({
  options,
  disabled,
  showSelect,
  setShowSelect,
  onSelect,
  listId,
}: UseOptionNavigationProps<T>) => {
  // -1 = nothing highlighted yet, so the first ArrowDown lands on option 0.
  const [activeIndex, setActiveIndex] = useState(-1);

  const resetActiveOption = () => setActiveIndex(-1);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    const lastIndex = options.length - 1;

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
      // No Home/End: these inputs are editable, and moving the caret to the
      // start of what you typed has to keep working.
      case 'Enter': {
        // Only while the list is open, so Enter still submits the form around a
        // closed select.
        if (!showSelect) return;
        event.preventDefault();
        const active = options[activeIndex];
        if (!active) return setShowSelect(false);
        // Reset here rather than in each caller: the list shrinks or reorders
        // after a pick, so a surviving index highlights an unrelated option.
        setActiveIndex(-1);
        return onSelect(active);
      }
      case 'Escape':
        if (!showSelect) return;
        event.preventDefault();
        setShowSelect(false);
        return resetActiveOption();
      default:
        return;
    }
  };

  return {
    activeIndex,
    activeOption: options[activeIndex],
    // Composed here, and by position, for two reasons: recovering the index with
    // `indexOf` picks the FIRST equal option, so arrowing onto a duplicate
    // highlighted the wrong row; and a closed list must not advertise an
    // `aria-activedescendant` whose element is no longer rendered.
    activeOptionId: showSelect && activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined,
    resetActiveOption,
    handleKeyDown,
  };
};

interface UseSelectDataProps<T extends SelectOption = SelectOption> {
  options: T[];
  disabled?: boolean;
  onChange: (option: T | null) => void;
  getOptionLabel: (option: T) => string | JSX.Element;
  refreshOptions?: (dependantId: string) => Promise<void>;
  dependantId?: string;
  value?: T;
  /**
   * Narrows what the list shows — the multi-selects drop already-picked values.
   * Applied before navigation too, so the highlighted option is always the one
   * the user can see.
   */
  filterOptions?: (options: T[]) => T[];
}

export const useSelectData = <T extends SelectOption = SelectOption>({
  options,
  disabled,
  onChange,
  getOptionLabel,
  refreshOptions,
  dependantId,
  value,
  filterOptions,
}: UseSelectDataProps<T>) => {
  const [input, setInputValue] = useState<string>('');
  const [showSelect, setShowSelect] = useState(false);
  const [loading, setLoading] = useState(false);
  const listId = `${useId()}-listbox`;

  // Callers write these inline — `refreshOptions={(id) => load(id)}` is the
  // shape in every consuming app — so they are a new reference on every render.
  // As effect dependencies they re-arm the effects below on every render, and
  // `refreshOptions` then writes the fetched options into the caller's state,
  // which renders again: an endless refetch. Read through refs so they stay
  // current without ever being a dependency.
  const refreshOptionsRef = useRef(refreshOptions);
  refreshOptionsRef.current = refreshOptions;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Derived, not mirrored into state. Holding the list in state and syncing it
  // from an effect looped forever: `options` is a new array on every render
  // whenever the caller omits it or builds it inline, so the effect re-ran, set
  // state, and re-rendered (~1800 renders/s, "Maximum update depth exceeded").
  const filteredOptions = input ? getFilteredOptions(options, input, getOptionLabel) : options;
  const visibleOptions = filterOptions ? filterOptions(filteredOptions) : filteredOptions;
  const { activeOptionId, resetActiveOption, handleKeyDown } = useOptionNavigation({
    options: visibleOptions,
    disabled,
    showSelect,
    setShowSelect,
    onSelect: (option) => handleClick(option),
    listId,
  });

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
      setInputValue('');
      resetActiveOption();
    }
  };

  const handleSetOptions = useCallback(async () => {
    const refresh = refreshOptionsRef.current;
    if (!refresh) return;
    setLoading(true);
    dependantId && (await refresh(dependantId));
    setLoading(false);
  }, [dependantId]);

  useEffect(() => {
    if (!showSelect || options?.length) return;
    handleSetOptions();
  }, [showSelect, handleSetOptions, options?.length]);

  useEffect(() => {
    if (typeof dependantId === 'undefined') return;
    handleSetOptions();
  }, [dependantId, handleSetOptions]);

  // Nothing selected means nothing to clear; and the multi-selects pass their
  // whole value array here, where `value?.id` is always undefined — that made
  // the check below always true for them, and their `onChange` appended the
  // resulting `null` to the value list on every render.
  const valueId = value?.id;
  const canClearValue = !disabled && !!dependantId && value != null && !Array.isArray(value);

  useEffect(() => {
    if (!canClearValue) return;

    const isValueInOptions = options?.some((option) => option?.id === valueId);
    if (!isValueInOptions) {
      onChangeRef.current(null);
    }
  }, [options, canClearValue, valueId]);

  const handleClick = (option: T) => {
    setShowSelect(false);
    setInputValue('');
    resetActiveOption();

    if (value && getOptionLabel(value) === getOptionLabel(option)) return;

    onChange(option);
  };

  const handleOnChange = (input: string) => {
    if (!options) return;

    if (input) {
      setShowSelect(true);
    }
    setInputValue(input);
    // The filtered list is a different list — highlighting index 3 of the old
    // one would point at an unrelated option.
    resetActiveOption();
  };

  const handleToggleSelect = () => {
    if (disabled) return;
    setShowSelect(!showSelect);
    resetActiveOption();
  };

  return {
    suggestions: visibleOptions,
    input,
    handleToggleSelect,
    showSelect,
    handleBlur,
    handleClick,
    handleOnChange,
    handleKeyDown,
    activeOptionId,
    listId,
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
  /** Narrows what the list shows — the multi-select drops already-picked values. */
  filterOptions?: (options: T[]) => T[];
}

export const useAsyncSelectData = <T extends SelectOption = SelectOption>({
  loadOptions,
  disabled,
  onChange,
  dependantValue,
  name,
  optionsKey,
  handleGetNextPageParam,
  filterOptions,
}: UseAsyncSelectDataProps<T>) => {
  const [input, setInput] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const observerRef = useRef(null);
  const listId = `${useId()}-listbox`;

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
      resetActiveOption();
    }
  };

  const handleClick = (option: T) => {
    setShowSelect(false);
    setInput('');
    resetActiveOption();
    onChange(option);
  };

  const handleToggleSelect = () => {
    if (disabled) return;
    setShowSelect(!showSelect);
    resetActiveOption();
  };

  const handleInputChange = (input: string) => {
    setShowSelect(!!input.length);
    setInput(input);
    // A new query is a new list — the old highlight would point elsewhere.
    resetActiveOption();
  };

  const suggestions: T[] = data
    ? data.pages
        .flat()
        .map((item) => item?.data)
        .flat()
    : [];
  const visibleOptions = filterOptions ? filterOptions(suggestions) : suggestions;

  const { activeOptionId, resetActiveOption, handleKeyDown } = useOptionNavigation({
    options: visibleOptions,
    disabled,
    showSelect,
    setShowSelect,
    onSelect: handleClick,
    listId,
  });


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
    handleKeyDown,
    activeOptionId,
    listId,
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
