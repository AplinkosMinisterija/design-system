import { phoneNumberPrefixes } from './common/constants';
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
    const isPartialPhoneValid = [...phoneNumberPrefixes, '+370'].some((prefix) => {
      const prefixMatches = prefix.startsWith(input.slice(0, prefix.length));
      const isNumeric = /^(\+)?\d*$/.test(input);
      const isLengthValid = input.length - prefix.length <= 8;

      return prefixMatches && isNumeric && isLengthValid;
    });

    if (isPartialPhoneValid) {
      onChange(input.replaceAll(',', '.'));
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
