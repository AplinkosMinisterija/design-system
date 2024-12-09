import { useState } from 'react';
import FieldWrapper from './common/FieldWrapper';
import { handleRemove } from './common/functions';
import MultiTextField from './common/MultiTextFieldInput';
import OptionsContainer from './common/OptionsContainer';

export interface CreatableMultiSelectProps {
  label?: string;
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
  const isExist = values.some((value) => value === input);

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

  const handleKeyDown = (event) => {
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
        handleInputChange={(input) => {
          setShowSelect(input?.length > 0);
          setInputValue(input);
        }}
        getOptionLabel={(option) => `${option}`}
        hideDropdown={true}
      />
      <OptionsContainer
        options={[isExist ? 'Toks reikšmė jau egzistuoja' : `Sukurti: ${input}`]}
        getOptionLabel={(option) => `${option}`}
        showSelect={showSelect}
        handleClick={handleAdd}
      />
    </FieldWrapper>
  );
};

export default CreatableMultiSelect;
