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
  label?: string;
  values?: any[];
  error?: string;
  showError?: boolean;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => any;
  loadOptions: (input: any, page: number, id?: any) => any;
  dependantValue?: any;
  optionsKey?: string;
  hasOptionKey?: boolean;
  placeholder?: string;
  name?: string;
}

const AsyncMultiSelectField = ({
  label,
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
  } = useAsyncSelectData({
    loadOptions,
    disabled,
    onChange: (option: any) => onChange([...values, option]),
    dependantValue,
    optionsKey,
  });

  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      label={label}
      error={error}
      showError={showError}
      handleBlur={handleBlur}
    >
      <MultiTextField
        name={name}
        placeholder={placeholder}
        values={values}
        onRemove={({ index }) => {
          handleRemove(index, onChange, values);
        }}
        input={input}
        error={error}
        disabled={disabled}
        handleInputChange={handleInputChange}
        getOptionLabel={getOptionLabel}
      />
      <OptionsContainer
        values={filterSelectedOptions(suggestions, values, getOptionValue)}
        getOptionLabel={getOptionLabel}
        loading={loading}
        observerRef={observerRef}
        showSelect={showSelect}
        handleClick={handleClick}
        texts={texts}
      />
    </FieldWrapper>
  );
};

export default AsyncMultiSelectField;
