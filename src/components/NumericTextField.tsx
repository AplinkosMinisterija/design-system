import FieldWrapper from './common/FieldWrapper';
import TextFieldInput from './common/TextFieldInput';
import { useState } from 'react';

export interface NumericTextFieldProps {
  value?: string | number;
  name?: string;
  error?: string;
  showError?: boolean;
  label?: string;
  icon?: JSX.Element;
  className?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  ref?: HTMLHeadingElement;
  bottomLabel?: string;
  disabled?: boolean;
  height?: number;
  readOnly?: boolean;
  onInputClick?: () => void;
  placeholder?: string;
  wholeNumber?: boolean;
  negativeNumber?: boolean;
  secondLabel?: JSX.Element;
  subLabel?: string;
}

const NumericTextField = ({
  value = '',
  name,
  error,
  label,
  className,
  left,
  right,
  padding,
  onChange,
  placeholder,
  disabled,
  height,
  showError,
  wholeNumber = false,
  negativeNumber = false,
  onInputClick,
  bottomLabel,
  subLabel,
  secondLabel,
}: NumericTextFieldProps) => {
  const [inputValue, setInputValue] = useState(value?.toString() || '');
  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      const number = inputValue ? Number(inputValue) : NaN;
      if (!Number.isNaN(number)) {
        if (inputValue.endsWith('.')) {
          setInputValue(inputValue.replace('.', ''));
        }
      } else {
        setInputValue('');
      }
    }
  };

  const handleChange = (input) => {
    const regex = new RegExp(
      wholeNumber
        ? `^${negativeNumber ? '-?' : ''}[0-9]{0,11}$`
        : `^${negativeNumber ? '-?' : ''}\\d*([.,]\\d*)?$`,
    );

    if (regex.test(input)) {
      const fixed = input.replaceAll(',', '.');
      const number = input ? Number(fixed) : NaN;
      setInputValue(fixed);
      if (!Number.isNaN(number)) {
        onChange(number);
      } else {
        onChange(undefined);
      }
    }
  };

  return (
    <FieldWrapper
      handleBlur={handleBlur}
      padding={padding}
      className={className}
      label={label}
      bottomLabel={bottomLabel}
      subLabel={subLabel}
      secondLabel={secondLabel}
      error={error}
      showError={showError}
    >
      <TextFieldInput
        value={inputValue}
        name={name}
        error={error}
        left={left}
        right={right}
        onChange={handleChange}
        disabled={disabled}
        height={height}
        onInputClick={onInputClick}
        placeholder={placeholder}
      />
    </FieldWrapper>
  );
};

export default NumericTextField;
