import FieldWrapper from "../../internal/FieldWrapper";
import MultiTextField from "../../internal/MultiTextFieldInput";
import OptionsContainer from "../../internal/OptionsContainer";
import { filterSelectedOptions, handleRemove } from "../../../functions";
import { useSelectData } from "../../../hooks";

export interface SelectOption {
  id?: string;
  label?: string;
  [key: string]: any;
}

interface SelectFieldProps {
  id?: string;
  name?: string;
  label?: string;
  values: any[];
  error?: string;
  showError?: boolean;
  editable?: boolean;
  options: SelectOption[] | string[];
  left?: JSX.Element;
  right?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  handleLogs?: (data: any) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  backgroundColor?: string;
  hasBorder?: boolean;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => any;
  isSearchable?: boolean;
  refreshOptions?: (id?: string) => any;
  dependantId?: string;
}

const MultiSelect = ({
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
    loading
  } = useSelectData({
    options,
    disabled,
    getOptionLabel,
    refreshOptions,
    dependantId,
    value: values,
    onChange: (option: any) => onChange([...values, option])
  });
  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      label={label}
      error={error}
      handleBlur={handleBlur}
    >
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

export default MultiSelect;
