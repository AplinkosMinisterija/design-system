export const getFilteredOptions = (options, input, getOptionLabel) => options?.filter((option) => {
    const label = getOptionLabel(option)?.toString().toLowerCase();
    return label?.includes(input.toLowerCase());
});
export const filterSelectedOptions = (suggestions, values, getOptionValue) => suggestions.filter((opt) => !values?.some((value) => getOptionValue(value) === getOptionValue(opt)));
export const handleRemove = (index, onChange, values) => {
    if (!values?.length)
        return;
    onChange([...values.slice(0, index), ...values.slice(index + 1)]);
};
