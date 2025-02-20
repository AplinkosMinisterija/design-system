import { useState } from 'react';
import FieldWrapper from './common/FieldWrapper';
import TextFieldInput from './common/TextFieldInput';

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
      setInputValue(value?.toString() || '');
    }
  };

  const handleChange = (input = '') => {
    const basePattern = negativeNumber ? '-?' : '';
    const regexPattern = wholeNumber
      ? `^${basePattern}[0-9]{0,11}$`
      : `^${basePattern}\\d*([.,]\\d*)?$`;

    const regex = new RegExp(regexPattern);

    if (regex.test(input)) {
      const fixed = input.replaceAll(',', '.');
      const significantDigitsCount = fixed.replace('.', '').replace('-', '')?.length || 0;
      if (significantDigitsCount <= 15) {
        const number = fixed ? Number(fixed) : undefined;

        setInputValue(fixed);
        onChange(Number.isNaN(number) ? undefined : number);
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
        inputMode={wholeNumber ? 'numeric' : 'decimal'}
        label={label}
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
