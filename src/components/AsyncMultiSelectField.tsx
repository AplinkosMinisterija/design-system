import { useAsyncSelectData } from '@/components/common/hooks';
import FieldWrapper from '@/components/common/FieldWrapper';
import MultiTextField from '@/components/common/MultiTextFieldInput';
import { filterSelectedOptions, handleRemove } from '@/components/common/functions';
import OptionsContainer, { OptionContainerTexts } from '@/components/common/OptionsContainer';

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
}

const AsyncMultiSelectField = ({
  label,
  values = [],
  error,
  showError = true,
  optionsKey = 'rows',
  hasOptionKey = true,
  onChange,
  disabled = false,
  getOptionLabel = (option) => option.label,
  getOptionValue = (option) => option.id,
  loadOptions,
  dependantValue,
  texts,
}: SelectFieldProps) => {
  const {
    loading,
    handleScroll,
    suggestions,
    handleInputChange,
    handleToggleSelect,
    input,
    showSelect,
    handleBlur,
    handleClick,
  } = useAsyncSelectData({
    loadOptions,
    disabled,
    onChange: (option) => onChange([...values, option]),
    dependantValue,
    optionsKey,
    hasOptionKey,
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
        showSelect={showSelect}
        handleClick={handleClick}
        handleScroll={handleScroll}
        texts={texts}
      />
    </FieldWrapper>
  );
};

export default AsyncMultiSelectField;
