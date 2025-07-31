import { useEffect, useId } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';

export interface TextFieldProps {
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
  onChange: (props: any) => void;
  onClick?: () => void;
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
}

const TextAreaField = ({
  value,
  name,
  error,
  showError = true,
  label,
  className,
  onChange,
  onClick,
  rows = 5,
  placeholder,
  padding,
  disabled = false,
}: TextFieldProps) => {
  const { width, ref } = useResizeDetector();
  const id = useId();

  useEffect(() => {
    if (rows * 20 < ref?.current?.scrollHeight) {
      ref.current.style.height = 'auto';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  }, [ref, value, width]);

  return (
    <FieldWrapper
      onClick={onClick}
      padding={padding}
      className={className}
      label={label}
      htmlFor={id}
      error={error}
      showError={showError}
    >
      <InputContainer $error={!!error} $disabled={disabled}>
        <StyledTextArea
          id={id}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          value={value}
          name={name}
          onChange={(e) => onChange && onChange(e.target.value || '')}
          aria-label={label || name || 'Text area'}
        />
      </InputContainer>
    </FieldWrapper>
  );
};

const InputContainer = styled.div<{ $error: boolean; $disabled: boolean }>`
  display: flex;
  height: auto;
  overflow: hidden;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.fields?.background || 'white'};
  border: 1px solid
    ${({ theme, $error }) => ($error ? '#FE5B78' : theme.colors.fields?.border || '#d4d5de')};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  border-radius: ${({ theme }) => theme.radius?.fields || 0.4}rem;
  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.fields?.borderFocus || theme.colors.fields?.border || '#d4d5de'};
    box-shadow: ${({ theme }) =>
      theme.colors.fields?.borderFocus ? `0 0 0 4px ${theme.colors.fields.borderFocus}33` : 'none'};
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  width: 100%;
  overflow-y: hidden;
  resize: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  font-size: ${({ theme }) => theme.fontSize?.fields || 1.6}rem;
  color: ${({ theme }) => theme.colors.fields?.text || '#101010'};
  background-color: ${({ theme }) => theme.colors.fields?.background || 'white'};
  &:focus {
    outline: none;
  }
`;

export default TextAreaField;
