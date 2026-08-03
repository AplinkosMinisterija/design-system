import { useState } from 'react';
import FieldWrapper from './common/FieldWrapper';
import { handleRemove } from './common/functions';
import MultiTextField from './common/MultiTextFieldInput';
import OptionsContainer from './common/OptionsContainer';

export interface CreatableMultiSelectProps {
  label?: string;
  required?: boolean;
  values?: any;
  error?: string;
  showError?: boolean;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

const CreatableMultiSelect = ({
  label,
  required,
  values,
  error,
  showError = true,
  className,
  placeholder = 'Įveskite',
  padding,
  onChange,
  disabled = false,
}: CreatableMultiSelectProps) => {
  const [input, setInputValue] = useState<any>('');
  const [showSelect, setShowSelect] = useState(false);
  const isExist = values.some((value: any) => value === input);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleAdd();
    }
  };

  const clear = () => {
    setShowSelect(false);
    setInputValue('');
  };

  const handleAdd = () => {
    if (!isExist && input) {
      onChange([...values, input]);
    }
    clear();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <FieldWrapper
      showError={showError}
      padding={padding}
      className={className}
      label={label}
      required={required}
      error={error}
      handleBlur={handleBlur}
    >
      <MultiTextField
        values={values}
        label={label}
        placeholder={placeholder}
        input={input}
        error={error}
        handleKeyDown={handleKeyDown}
        onRemove={({ index }) => {
          handleRemove(index, onChange, values);
        }}
        disabled={disabled}
        handleInputChange={(input: string) => {
          setShowSelect(input?.length > 0);
          setInputValue(input);
        }}
        getOptionLabel={(option: any) => `${option}`}
        hideDropdown={true}
      />
      <OptionsContainer
        options={[isExist ? 'Toks reikšmė jau egzistuoja' : `Sukurti: ${input}`]}
        getOptionLabel={(option: any) => `${option}`}
        showSelect={showSelect}
        handleClick={handleAdd}
      />
    </FieldWrapper>
  );
};

export default CreatableMultiSelect;
