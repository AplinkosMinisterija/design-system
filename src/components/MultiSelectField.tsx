import FieldWrapper from './common/FieldWrapper';
import { filterSelectedOptions, handleRemove } from './common/functions';
import { useSelectData } from './common/hooks';
import MultiTextField from './common/MultiTextFieldInput';
import OptionsContainer from './common/OptionsContainer';

export interface SelectOption {
  id?: string | number;
  label?: string;
  [key: string]: any;
}

export interface SelectFieldProps {
  label?: string;
  required?: boolean;
  values: any[];
  error?: string;
  options: SelectOption[] | string[];
  onChange: (option: any) => void;
  disabled?: boolean;
  hasBorder?: boolean;
  getOptionLabel?: (option: any) => string | JSX.Element;
  getOptionValue?: (option: any) => any;
  refreshOptions?: (id?: string) => any;
  dependantId?: string;
}

const MultiSelectField = ({
  label,
  required,
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
    activeOptionId,
    handleKeyDown,
    listId,
    loading,
  } = useSelectData({
    options,
    disabled,
    getOptionLabel,
    refreshOptions,
    dependantId,
    value: values,
    onChange: (option: any) => onChange([...values, option]),
    filterOptions: (all) => filterSelectedOptions(all, values, getOptionValue),
  });


  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      label={label}
      required={required}
      error={error}
      handleBlur={handleBlur}
    >
      <MultiTextField
        values={values}
        label={label}
        input={input || ''}
        error={error}
        onRemove={({ index }) => {
          handleRemove(index, onChange, values);
        }}
        disabled={disabled}
        handleInputChange={handleOnChange}
        getOptionLabel={getOptionLabel}
        handleKeyDown={handleKeyDown}
        ariaExpanded={showSelect}
        ariaControls={listId}
        ariaActivedescendant={activeOptionId}
      />
      <OptionsContainer
        id={listId}
        name={listId}
        options={suggestions}
        activeOptionId={activeOptionId}
        getOptionLabel={getOptionLabel}
        showSelect={showSelect}
        handleClick={handleClick}
        loading={loading}
      />
    </FieldWrapper>
  );
};

export default MultiSelectField;
