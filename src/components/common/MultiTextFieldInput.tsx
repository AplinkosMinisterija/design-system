import { useRef } from 'react';
import styled from 'styled-components';
import Icon from '../common/Icons';

export interface MultiTextFieldProps {
  values: any[];
  error?: string;
  className?: string;
  onRemove: ({ value, index }: any) => void;
  handleKeyDown?: (event?: any) => void;
  disabled?: boolean;
  handleInputChange: (event: any) => void;
  getOptionLabel: (option: any) => string | JSX.Element;
  placeholder?: string;
  input: string;
  backgroundColor?: string;
  height?: number;
  name?: string;
  hideDropdown?: boolean;
  label?: string;
  role?: string;
  ariaLabelRemove?: string;
  ariaLabelSelectedValue?: string;
  ariaLabelDropDownIcon?: string;
}

const MultiTextField = ({
  values = [],
  backgroundColor,
  label = '',
  error,
  handleInputChange,
  getOptionLabel,
  onRemove,
  placeholder = '',
  input = '',
  disabled,
  handleKeyDown,
  role = 'combobox',
  name,
  height = 56,
  ariaLabelRemove = 'Pašalinti',
  ariaLabelSelectedValue = 'Pasirinkta reikšmė',
  ariaLabelDropDownIcon = 'Išskleidimo ikonėlė',
  hideDropdown = false,
}: MultiTextFieldProps) => {
  const inputRef = useRef<any>(null);
  const ariaValue = label || name || 'field';

  const handleClick = () => {
    if (!inputRef?.current) return;
    inputRef?.current?.focus();
  };

  const handleRemove = (e: React.KeyboardEvent | React.MouseEvent, value: any, index: number) => {
    e.stopPropagation();
    if (disabled) return;
    onRemove({ value, index });
  };

  const handleRemoveOnKeyDown = (e, value, index) => {
    const keysToRemove = ['Enter', 'Backspace', 'Delete'];
    if (keysToRemove.includes(e.key)) {
      handleRemove(e, value, index);
    }
  };

  return (
    <InputContainer
      className="inputContainer"
      onClick={handleClick}
      $hasBorder={true}
      $backgroundColor={backgroundColor}
      $error={!!error}
      $disabled={disabled || false}
      $height={height}
      aria-disabled={disabled}
      aria-invalid={!!error}
      role={role}
      aria-label={label || placeholder || 'Multi-select field'}
    >
      <InnerContainer role="listbox">
        {values?.map((value: any, index) => (
          <SimpleCard
            key={index}
            disabled={!!disabled}
            role="option"
            aria-selected="true"
            aria-label={`${ariaLabelSelectedValue} ${getOptionLabel(value)}`}
            tabIndex={disabled ? -1 : 0}
          >
            <Name>{getOptionLabel(value)}</Name>
            <IconContainer
              onClick={(e) => handleRemove(e, value, index)}
              onKeyDown={(e) => {
                handleRemoveOnKeyDown(e, value, index);
              }}
              role="button"
              tabIndex={disabled ? -1 : 0}
              aria-label={`${ariaLabelRemove} ${getOptionLabel(value)}`}
            >
              <StyledCloseIcon name="close" />
            </IconContainer>
          </SimpleCard>
        ))}
        {!disabled && (
          <Input
            id={ariaValue}
            aria-labelledby={!values?.length ? `${ariaValue}-placeholder` : undefined}
            onKeyDown={handleKeyDown}
            name={name}
            ref={inputRef}
            placeholder={!values?.length ? placeholder : ''}
            disabled={disabled}
            value={input}
            onChange={(e) => handleInputChange(e?.target?.value)}
            aria-label="Įveskite reikšmę"
            role="textbox"
            aria-autocomplete="list"
          />
        )}
      </InnerContainer>
      {!hideDropdown && (
        <DropdownIconContainer
          role="presentation"
          aria-hidden="true"
          tabIndex={disabled ? -1 : 0}
          aria-label={ariaLabelDropDownIcon}
        >
          <StyledIcons name="dropdownArrow" />
        </DropdownIconContainer>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div<{
  $error: boolean;
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
      theme.colors.fields?.borderFocus
        ? `0 0 0 4px ${theme.colors.fields?.borderFocus}33`
        : 'none'};
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
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const SimpleCard = styled.label<{ disabled: boolean }>`
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.fields?.tagText || '#333333'};
  background-color: ${({ theme }) => theme.colors.fields?.tag || '#e8eeef'};
  border-radius: ${({ theme }) => theme.radius?.multiSelectFieldTag || 0.2}rem;
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
