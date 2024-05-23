import { useRef } from 'react';
import styled from 'styled-components';
import Icon from '../common/Icons';
export interface MultiTextFieldProps {
  values: any[];
  error?: string;
  className?: string;
  onRemove: ({ value, index }: any) => void;
  disabled?: boolean;
  handleInputChange: (event: any) => void;
  getOptionLabel: (option: any) => string;
  handleKeyDown?: (event: any) => void;
  placeholder?: string;
  input: string;
  backgroundColor?: string;
  height?: number;
  name?: string;
}

const MultiTextField = ({
  values = [],
  backgroundColor,
  error,
  handleInputChange,
  getOptionLabel,
  onRemove,
  handleKeyDown,
  placeholder = '',
  input = '',
  disabled,
  name,
  height = 56,
}: MultiTextFieldProps) => {
  const inputRef = useRef<any>(null);

  const handleClick = () => {
    if (!inputRef?.current) return;
    inputRef?.current?.focus();
  };

  return (
    <InputContainer
      className="inputContainer"
      onClick={handleClick}
      $hasBorder={true}
      $backgroundColor={backgroundColor}
      $readOnly={false}
      $error={!!error}
      $disabled={disabled || false}
      $height={height}
    >
      <InnerContainer>
        {values?.map((value: any, index) => (
          <SimpleCard key={value + index} disabled={!!disabled}>
            <Name>{getOptionLabel(value)}</Name>
            <IconContainer
              onClick={(e) => {
                e.stopPropagation();
                if (disabled) return;
                onRemove({ value, index });
              }}
            >
              <StyledCloseIcon name="close" />
            </IconContainer>
          </SimpleCard>
        ))}
        {!disabled && (
          <Input
            name={name}
            ref={inputRef}
            placeholder={!values?.length ? placeholder : ''}
            disabled={disabled}
            value={input}
            onChange={(e) => handleInputChange(e?.target?.value)}
            onKeyDown={handleKeyDown}
          />
        )}
      </InnerContainer>
      <DropdownIconContainer>
        <StyledIcons name="dropdownArrow" />
      </DropdownIconContainer>
    </InputContainer>
  );
};

const InputContainer = styled.div<{
  $error: boolean;
  $readOnly: boolean;
  $disabled: boolean;
  $hasBorder: boolean;
  $backgroundColor: string;
}>`
  ${({ $hasBorder, $error, theme }) =>
    $hasBorder
      ? `
   border: 1px solid
    ${$error ? theme.colors.error || '#FE5B78' : theme.colors.fields?.border || '#d4d5de'};
  `
      : null}
  border-radius: ${({ theme }) => theme.radius?.fields || 0.8}rem;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px 4px 4px;
  min-height: ${({ theme }) => `${theme.height?.fields || 5.6}rem`};
  overflow: hidden;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.colors.fields?.background || 'white'};
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  &:focus {
    outline: none;
  }
  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.fields?.borderFocus || theme.colors.fields?.border || '#d4d5de'};
    box-shadow: ${({ theme }) =>
      theme.colors.fields?.borderFocus ? `0 0 0 4px ${theme.colors.fields.borderFocus}33` : 'none'};
  }
  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  display: inline-block;
  min-width: 50px;
  width: 100%;
  height: 100%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  flex: 1;
  background-color: transparent;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.fields?.text || '#101010'};
  ::-webkit-input-placeholder {
    color: ${({ theme }) => (theme.colors.fields?.text || '#101010') + '8F'};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => (theme.colors.fields?.text || '#101010') + '8F'};
  }
  ::placeholder {
    color: ${({ theme }) => (theme.colors.fields?.text || '#101010') + '8F'};
  }
  :focus {
    outline: none;
    border: none;
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const StyledCloseIcon = styled(Icon)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fields?.tagText || '#333333'};
`;

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SimpleCard = styled.label<{ disabled: boolean }>`
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.fields?.tagText || '#333333'};
  background-color: ${({ theme }) => theme.colors.fields?.tag || '#e8eeef'};
  border-radius: ${({ theme }) => theme.radius.multiSelectFieldTag || 0.2}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 3px 3px 3px 6px;
  margin: 2px;
`;

const Name = styled.div`
  font-size: 1.4rem;
`;

const StyledIcons = styled(Icon)`
  color: ${({ theme }) => theme.colors.fields?.icon || '#cdd5df'};
  font-size: 2.4rem;
`;
const DropdownIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MultiTextField;
