import styled from 'styled-components';

export interface TextFieldProps {
  value?: string | number;
  name?: string;
  error?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  onChange?: (option?: any) => void;
  disabled?: boolean;
  height?: number;
  readOnly?: boolean;
  onInputClick?: () => void;
  placeholder?: string | JSX.Element;
  type?: string;
  inputMode?: any;
  selectedValue?: boolean;
  onFocus?: any;
  variant?: string;
  label?: string;
}

const TextFieldInput = ({
  value,
  label,
  name,
  error,
  readOnly = false,
  left,
  right,
  onChange,
  placeholder,
  type = 'text',
  disabled,
  height,
  selectedValue = false,
  onInputClick,
  inputMode = 'text',
  onFocus = () => {},
  variant = 'default',
  ...rest
}: TextFieldProps) => {
  const inputId = label || name;

  return (
    <InputContainer
      $error={!!error}
      $height={height}
      $disabled={disabled || false}
      aria-disabled={disabled}
      aria-invalid={!!error}
    >
      {left}
      <InputWrapper>
        {!value && typeof placeholder !== 'string' && (
          <CustomPlaceholder id={`${inputId}-placeholder`}>{placeholder}</CustomPlaceholder>
        )}

        <StyledTextInput
          id={inputId}
          aria-labelledby={
            placeholder && typeof placeholder === 'string' ? `${inputId}-placeholder` : undefined
          }
          $selectedValue={selectedValue}
          onClick={() => (onInputClick ? onInputClick() : null)}
          readOnly={readOnly}
          type={type}
          name={name}
          autoComplete="off"
          value={value || ''}
          onChange={(e: any) => onChange && onChange(e?.target?.value || '')}
          placeholder={typeof placeholder === 'string' ? placeholder : ''}
          disabled={disabled}
          onFocus={onFocus}
          inputMode={inputMode}
          {...rest}
        />
      </InputWrapper>
      {right}
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

const CustomPlaceholder = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 96%;
  overflow-x: hidden;
`;

const InputWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div<{
  $error: boolean;
  $disabled: boolean;
}>`
  display: flex;
  height: ${({ theme }) => `${theme.height?.fields || 5.6}rem`};
  background-color: ${({ theme }) => theme.colors.fields?.background || 'white'};
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.fields || 0.4}rem;
  overflow: hidden;
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.error || '#FE5B78' : theme.colors.fields?.border || '#d4d5de'};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.fields?.borderFocus || theme.colors.fields?.border || '#d4d5de'};
    box-shadow: ${({ theme }) =>
      theme.colors.fields?.borderFocus ? `0 0 0 4px ${theme.colors.fields.borderFocus}33` : 'none'};
  }
`;

const StyledTextInput = styled.input<{
  $selectedValue: boolean;
}>`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  background-color: ${({ theme }) => theme.colors.fields?.background || 'white'};
  font-size: ${({ theme }) => theme.fontSize?.fields || 1.6}rem;
  color: ${({ theme }) => theme.colors.fields?.text || '#101010'};

  &:focus {
    outline: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-input-placeholder {
    color: ${({ theme, $selectedValue }) =>
      (theme.colors.fields?.text || '#101010') + `${!$selectedValue ? '8F' : ''}`};
  }
  ::-moz-placeholder {
    color: ${({ theme, $selectedValue }) =>
      (theme.colors.fields?.text || '#101010') + `${!$selectedValue ? '8F' : ''}`};
  }
  ::-ms-placeholder {
    color: ${({ theme, $selectedValue }) =>
      (theme.colors.fields?.text || '#101010') + `${!$selectedValue ? '8F' : ''}`};
  }
  ::placeholder {
    color: ${({ theme, $selectedValue }) =>
      (theme.colors.fields?.text || '#101010') + `${!$selectedValue ? '8F' : ''}`};
  }
`;

const ErrorText = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error || '#FE5B78'};
  margin-top: 4px;
`;

export default TextFieldInput;
