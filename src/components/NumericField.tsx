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
  /** What the user last typed, or `null` when the box should just show `value`. */
  const [typed, setTyped] = useState<string | null>(null);

  // Derived, not synced. The box keeps the typed text only while that text still
  // spells `value` (`574.` and `1.50` do), and otherwise shows what the parent
  // holds — so a value set from outside lands immediately, with no effect to
  // paint a stale number first and no render-phase condition that could fail to
  // settle. Blur drops the typed text to re-canonicalize (`1.50` -> `1.5`).
  const inputValue = typed !== null && isSameNumber(typed, value) ? typed : numericFieldText(value);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setTyped(null);
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
        setTyped(fixed);
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
