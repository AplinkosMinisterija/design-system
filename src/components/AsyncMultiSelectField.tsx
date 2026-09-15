import FieldWrapper from './common/FieldWrapper';
import { filterSelectedOptions, handleRemove } from './common/functions';
import { useAsyncSelectData } from './common/hooks';
import MultiTextField from './common/MultiTextFieldInput';
import OptionsContainer, { OptionContainerTexts } from './common/OptionsContainer';

export interface SelectOption {
  id?: string;
  label?: string;
  [key: string]: any;
}

export interface SelectFieldProps {
  texts?: OptionContainerTexts;
  /**
   * Characters required before `loadOptions` returns anything. Purely
   * cosmetic — it tells the dropdown to say `texts.shortQuery` instead of
   * `texts.noOptions` while the input is shorter, so a register that has not
   * been asked does not report itself empty.
   */
  minQueryLength?: number;
  label?: string;
  required?: boolean;
  values?: any[];
  error?: string;
  showError?: boolean;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel?: (option: any) => string | JSX.Element;
  getOptionValue?: (option: any) => any;
  loadOptions: (input: any, page: number, id?: any) => any;
  dependantValue?: any;
  optionsKey?: string;
  hasOptionKey?: boolean;
  placeholder?: string;
  name: string;
  handleGetNextPageParam?: (params: any) => number | undefined;
}

const AsyncMultiSelectField = ({
  label,
  required,
  values = [],
  name,
  error,
  showError = true,
  placeholder,
  optionsKey = 'rows',
  onChange,
  disabled = false,
  getOptionLabel = (option) => option.label,
  getOptionValue = (option) => option.id,
  loadOptions,
  dependantValue,
  texts = { noOptions: 'Nėra pasirinkimų' },
  minQueryLength = 0,
  handleGetNextPageParam = (data) => {
    return data?.page < data?.totalPages ? data.page + 1 : undefined;
  },
}: SelectFieldProps) => {
  const {
    loading,
    suggestions,
    handleInputChange,
    handleToggleSelect,
    input,
    showSelect,
    observerRef,
    handleBlur,
    handleClick,
    activeOptionId,
    handleKeyDown,
    listId,
  } = useAsyncSelectData({
    loadOptions,
    disabled,
    onChange: (option: any) => onChange([...values, option]),
    filterOptions: (all) => filterSelectedOptions(all, values, getOptionValue),
    dependantValue,
    optionsKey,
    name,
    handleGetNextPageParam,
  });

  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      label={label}
      required={required}
      error={error}
      showError={showError}
      handleBlur={handleBlur}
    >
      <MultiTextField
        name={name}
        label={label}
        placeholder={placeholder}
        values={values}
        onRemove={({ index }) => {
          handleRemove(index, onChange, values);
        }}
        input={input}
        error={error}
        disabled={disabled}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        ariaExpanded={showSelect}
        ariaControls={listId}
        ariaActivedescendant={activeOptionId}
        getOptionLabel={getOptionLabel}
      />
      <OptionsContainer
        id={listId}
        name={listId}
        options={suggestions}
        activeOptionId={activeOptionId}
        getOptionLabel={getOptionLabel}
        loading={loading}
        observerRef={observerRef}
        showSelect={showSelect}
        handleClick={handleClick}
        texts={texts}
        queryTooShort={input.trim().length < minQueryLength}
      />
    </FieldWrapper>
  );
};

export default AsyncMultiSelectField;
