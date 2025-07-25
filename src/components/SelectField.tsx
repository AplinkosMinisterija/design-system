import { JSX } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useKeyAction, useSelectData } from './common/hooks';
import Icon, { IconName } from './common/Icons';
import OptionsContainer from './common/OptionsContainer';
import TextFieldInput from './common/TextFieldInput';

export interface SelectFieldProps {
  name?: string;
  label?: string;
  value?: any;
  error?: string;
  showError?: boolean;
  options?: any[];
  left?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel: (option: any) => string;
  getOptionComponent?: (option: any) => string | JSX.Element;
  className?: string;
  placeholder?: string;
  dependantId?: string;
  clearable?: boolean;
  refreshOptions?: (dependantId?: string) => any;
  ariaLabelRemove?: string;
  ariaLabelDropDownIcon?: string;
}

const SelectField = ({
  label,
  value,
  name,
  error,
  showError = true,
  clearable = true,
  placeholder,
  options,
  className,
  left,
  padding,
  getOptionLabel,
  getOptionComponent,
  onChange,
  disabled,
  dependantId,
  refreshOptions,
  ariaLabelRemove = 'Pašalinti',
  ariaLabelDropDownIcon = 'Išskleidimo ikonėlė',
}: SelectFieldProps) => {
  const {
    suggestions,
    input,
    handleToggleSelect,
    showSelect,
    handleBlur,
    handleClick,
    handleOnChange,
    loading,
  } = useSelectData({
    options,
    disabled,
    onChange,
    getOptionLabel,
    refreshOptions,
    dependantId,
    value,
  });

  const handleKeyDown = useKeyAction(() => onChange(undefined), disabled);
  const showDeleteIcon = !!value && !!clearable && !disabled;

  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      handleBlur={handleBlur}
      padding={padding}
      className={className}
      label={label}
      error={error}
      showError={showError}
    >
      <TextFieldInput
        label={label}
        value={input}
        name={name}
        error={error}
        left={left}
        right={
          <RightContainer>
            {showDeleteIcon && (
              <IconContainer
                role="button"
                tabIndex={0}
                aria-label={`${ariaLabelRemove} ${typeof getOptionLabel(value) === 'string' ? getOptionLabel(value) : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  !disabled && onChange(undefined);
                }}
                onKeyDown={handleKeyDown()}
              >
                <ClearIcon name={IconName.close} />
              </IconContainer>
            )}
            <IconContainer tabIndex={disabled ? -1 : 0} aria-label={ariaLabelDropDownIcon}>
              <StyledIcon name={IconName.dropdownArrow} />
            </IconContainer>
          </RightContainer>
        }
        onChange={handleOnChange}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'Enter') {
            e.preventDefault();
            handleToggleSelect();
          }
        }}
        disabled={disabled}
        placeholder={
          value
            ? getOptionComponent
              ? getOptionComponent(value)
              : getOptionLabel(value)
            : placeholder
        }
        selectedValue={value}
      />
      <OptionsContainer
        options={suggestions}
        getOptionLabel={getOptionComponent || getOptionLabel}
        loading={loading}
        showSelect={showSelect}
        handleClick={handleClick}
      />
    </FieldWrapper>
  );
};

const RightContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ClearIcon = styled(Icon)<{ $disabled: boolean }>`
  color: #cdd5df;
  font-size: 2.4rem;
  cursor: pointer;
`;

const IconContainer = styled.div<{ $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const StyledIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
  margin-right: 12px;
`;

export default SelectField;
