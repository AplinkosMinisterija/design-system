import OptionsContainer from '@/common/OptionsContainer';
import FieldWrapper from '@/common/FieldWrapper';
import MultiTextField from '@/common/MultiTextFieldInput';
import { filterSelectedOptions, handleRemove } from '@/common/functions';
import { useSelectData } from '@/common/hooks';

export interface SelectOption {
  id?: string;
  label?: string;
  [key: string]: any;
}

export interface SelectFieldProps {
  label?: string;
  values: any[];
  error?: string;
  options: SelectOption[] | string[];
  onChange: (option: any) => void;
  disabled?: boolean;
  hasBorder?: boolean;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => any;
  refreshOptions?: (id?: string) => any;
  dependantId?: string;
}

const MultiSelectField = ({
  label,
  values = [],
  error,
  options,
  onChange,
  disabled = false,
  getOptionLabel = (option) => option.label,
  getOptionValue = (option) => option.id,
  refreshOptions,
  dependantId,
}: SelectFieldProps) => {
  const {
    suggestions,
    input,
    handleToggleSelect,
    showSelect,
    handleBlur,
    handleClick,
    handleOnChange,
    loading,
  } = useSelectData({
    options,
    disabled,
    getOptionLabel,
    refreshOptions,
    dependantId,
    value: values,
    onChange: (option) => onChange([...values, option]),
  });

  return (
    <FieldWrapper onClick={handleToggleSelect} label={label} error={error} handleBlur={handleBlur}>
      <MultiTextField
        values={values}
        input={input}
        error={error}
        onRemove={({ index }) => {
          handleRemove(index, onChange, values);
        }}
        disabled={disabled}
        handleInputChange={handleOnChange}
        getOptionLabel={getOptionLabel}
      />
      <OptionsContainer
        values={filterSelectedOptions(suggestions, values, getOptionValue)}
        getOptionLabel={getOptionLabel}
        showSelect={showSelect}
        handleClick={handleClick}
        loading={loading}
      />
    </FieldWrapper>
  );
};

export default MultiSelectField;
