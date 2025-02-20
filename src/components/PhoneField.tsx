import FieldWrapper from './common/FieldWrapper';
import TextFieldInput from './common/TextFieldInput';

export interface PhoneFieldProps {
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
  bottomLabel?: string;
  disabled?: boolean;
  height?: number;
  readOnly?: boolean;
  onInputClick?: () => void;
  placeholder?: string;
  secondLabel?: JSX.Element;
  subLabel?: string;
}

const PhoneField = ({
  value = '',
  name,
  error,
  label,
  className,
  left,
  right,
  padding,
  onChange,
  placeholder = '060000000',
  disabled,
  height,
  showError,
  onInputClick,
}: PhoneFieldProps) => {
  const handleChange = (input) => {
    const isPartialPhoneValid = ['+370', '0'].some((prefix) => {
      const inputPrefix = input.slice(0, prefix.length);
      const nextChar = input[prefix.length];

      const prefixMatches = prefix.startsWith(inputPrefix);
      const isNextCharValid = !nextChar || Number(nextChar) >= 3;
      const isNumeric = /^(\+)?\d*$/.test(input);
      const isLengthValid = input.length - prefix.length <= 8;

      return prefixMatches && isNumeric && isLengthValid && isNextCharValid;
    });
    if (isPartialPhoneValid) {
      onChange(input);
    }
  };

  return (
    <FieldWrapper
      padding={padding}
      className={className}
      label={label}
      error={error}
      showError={showError}
    >
      <TextFieldInput
        label={label}
        type="tel"
        inputMode={'tel'}
        value={value}
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

export default PhoneField;
