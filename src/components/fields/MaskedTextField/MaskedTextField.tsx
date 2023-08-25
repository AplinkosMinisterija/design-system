
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import FieldWrapper from "../../internal/FieldWrapper";

export interface TextFieldProps {
  mask: string;
  value?: string | number;
  name?: string;
  error?: string;
  showError?: boolean;
  label?: string;
  icon?: JSX.Element;
  className?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
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
}

const TextField = ({
                     value,
                     name,
                     error,
                     showError = true,
                     readOnly = false,
                     label,
                     className,
                     leftIcon,
                     rightIcon,
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
                     mask,
                     ...rest
                   }: TextFieldProps) => {
  return (
      <FieldWrapper
          padding={padding}
          className={className}
          label={label}
          subLabel={subLabel}
          secondLabel={secondLabel}
          error={error}
          showError={showError}
          bottomLabel={bottomLabel}
      >
        <InputContainer
            error={!!error}
            height={height || 40}
            disabled={disabled || false}
        >
          {leftIcon}
          <StyledMaskedTextField
              mask={mask}
              maskChar={'_'}
              value={value || '-'}
              onChange={onChange}
              readOnly={readOnly}
              type={type || 'text'}
              name={name}
              autoComplete="off"
              disabled={disabled}
              {...rest}
          />
          {rightIcon}
        </InputContainer>
      </FieldWrapper>
  );
};

const InputContainer = styled.div<{
  error: boolean;
  height: number;
  disabled: boolean;
}>`
  display: flex;
  height: ${({ height }) => (height ? `${height}px` : `40px`)};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.border)};
  opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  :focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const StyledMaskedTextField = styled(InputMask)`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  background-color: white;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text.input};

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
    color: ${({ theme, selectedValue }) =>
    theme.colors.text.input + `${!selectedValue ? '8F' : ''}`};
  }
  ::-moz-placeholder {
    color: ${({ theme, selectedValue }) =>
    theme.colors.text.input + `${!selectedValue ? '8F' : ''}`};
  }
  ::-ms-placeholder {
    color: ${({ theme, selectedValue }) =>
    theme.colors.text.input + `${!selectedValue ? '8F' : ''}`};
  }
  ::placeholder {
    color: ${({ theme, selectedValue }) =>
    theme.colors.text.input + `${!selectedValue ? '8F' : ''}`};
  }
`;

export default TextField;
