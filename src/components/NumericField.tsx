import { useState } from 'react';
import FieldWrapper from './common/FieldWrapper';
import { isSameNumber, numericFieldText } from './common/functions';
import TextFieldInput from './common/TextFieldInput';

export interface NumericFieldProps {
  value?: string | number;
  name?: string;
  error?: string;
  showError?: boolean;
  label?: string;
  required?: boolean;
  icon?: JSX.Element;
  className?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  padding?: string;
  onChange: (option: number | undefined) => void;
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
  returnNumber?: boolean;
}

const NumericField = ({
  value = '',
  name,
  error,
  label,
  required,
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
}: NumericFieldProps) => {
  const [inputValue, setInputValue] = useState(numericFieldText(value));

  // Follow `value` when it changes from outside: a prefill, a draft that loads
  // after mount, a reset. `Object.is`, not `!==` — a NaN value compares unequal
  // to itself, so `!==` never settles and React throws "Too many re-renders".
  const [lastValue, setLastValue] = useState(value);
  if (!Object.is(value, lastValue)) {
    setLastValue(value);
    if (!isSameNumber(inputValue, value)) setInputValue(numericFieldText(value));
  }

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInputValue(numericFieldText(value));
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
      required={required}
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

export default NumericField;
