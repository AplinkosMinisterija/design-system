import FieldWrapper from './common/FieldWrapper';
import TextFieldInput from './common/TextFieldInput';

export interface TextFieldProps {
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
  onChange?: (option?: any) => void;
  bottomLabel?: string;
  disabled?: boolean;
  height?: number;
  readOnly?: boolean;
  onInputClick?: () => void;
  subLabel?: string;
  placeholder?: string;
  type?: string;
  secondLabel?: JSX.Element;
  selectedValue?: boolean;
  /** Browser autofill hint, e.g. "email" or "current-password". Defaults to "off". */
  autoComplete?: string;
}

const TextField = ({
  value = '',
  name,
  error,
  showError = true,
  readOnly = false,
  label,
  required,
  className,
  left,
  right,
  padding,
  onChange,
  subLabel,
  placeholder,
  bottomLabel,
  type,
  disabled,
  height,
  secondLabel,
  onInputClick,
  autoComplete,
}: TextFieldProps) => {
  return (
    <FieldWrapper
      padding={padding}
      className={className}
      label={label}
      required={required}
      subLabel={subLabel}
      secondLabel={secondLabel}
      error={error}
      showError={showError}
      bottomLabel={bottomLabel}
    >
      <TextFieldInput
        label={label}
        value={value}
        name={name}
        error={error}
        left={left}
        right={right}
        onChange={onChange}
        disabled={disabled}
        height={height}
        readOnly={readOnly}
        onInputClick={onInputClick}
        autoComplete={autoComplete}
        placeholder={placeholder}
        type={type}
        ariaLabel={label || name}
      />
    </FieldWrapper>
  );
};

export default TextField;
