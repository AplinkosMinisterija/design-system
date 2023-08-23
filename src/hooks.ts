import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { getFilteredOptions } from "./functions";

export const useSelectData = ({
                                  options,
                                  disabled,
                                  onChange,
                                  getOptionLabel,
                                  refreshOptions,
                                  dependantId,
                                  value
                              }: any) => {
    const [input, setInputValue] = useState<any>(null);
    const [showSelect, setShowSelect] = useState(false);
    const [suggestions, setSuggestions] = useState(options);
    const [loading, setLoading] = useState(false);

    const handleBlur = (event: any) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setShowSelect(false);
            setInputValue("");
        }
    };

    const handleSetOptions = async () => {
        if (!refreshOptions) return;
        setLoading(true);
        await refreshOptions(dependantId);
        setLoading(false);
    };

    useEffect(() => {
        if (!showSelect || !isEmpty(options)) return;
        handleSetOptions();
    }, [showSelect]);

    useEffect(() => {
        if (typeof dependantId === "undefined") return;
        handleSetOptions();
    }, [dependantId]);

    useEffect(() => {
        const canClearValue =
            !disabled &&
            dependantId &&
            !options?.some((option: any) => option?.id === value?.id);

        if (canClearValue) {
            onChange(null);
        }

        setSuggestions(options);
    }, [options]);

    const handleClick = (option: any) => {
        setShowSelect(false);
        setInputValue("");

        if (getOptionLabel(value) === getOptionLabel(option)) return;

        onChange(option);
    };

    const handleOnChange = (input: any) => {
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
        loading
    };
};

