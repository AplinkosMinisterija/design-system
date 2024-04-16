import { useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import styled from 'styled-components';
import { FieldWrapper } from '@/index';

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

const TextAreaField = (props: TextFieldProps) => {
  const {
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
  } = props;

  const { width, ref } = useResizeDetector();

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
      error={error}
      showError={showError}
    >
      <InputContainer disabled={disabled} error={!!error}>
        <StyledTextArea
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          value={value}
          name={name}
          onChange={(e) => onChange && onChange(e.target.value || '')}
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
    ${({ theme, $error }) =>
      $error ? theme.colors.error || '#FE5B78' : theme.colors.fields?.border || '#d4d5de'};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  border-radius: ${({ theme }) => theme.radius.fields || 0.4}rem;
  :focus-within {
    //TODO: fix focus style
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  width: 100%;
  overflow-y: hidden;
  resize: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  font-size: ${({ theme }) => theme.fontSize.fields || 1.6}rem;
  color: ${({ theme }) => theme.colors.fields?.text || '#101010'};
  background-color: ${({ theme }) => theme.colors.fields?.background || 'white'};
  :focus {
    outline: none;
  }
`;

export default TextAreaField;
