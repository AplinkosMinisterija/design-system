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
  required?: boolean;
  /** The selected option object; with `getOptionValue` — the selected option's VALUE (e.g. its id). */
  value?: any;
  error?: string;
  showError?: boolean;
  options?: any[];
  left?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel?: (option: any) => string | JSX.Element;
  /** When provided, `value` is matched against options by this accessor, so consumers can pass a primitive value instead of the option object. */
  getOptionValue?: (option: any) => any;
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
  required,
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
  getOptionLabel: getOptionLabelProp,
  getOptionValue,
  getOptionComponent,
  onChange,
  disabled,
  dependantId,
  refreshOptions,
  ariaLabelRemove = 'Pašalinti',
  ariaLabelDropDownIcon = 'Išskleidimo ikonėlė',
}: SelectFieldProps) => {
  const getOptionLabel = getOptionLabelProp || ((option: any) => option.label);
  // With getOptionValue the consumer passes the option's value — resolve the
  // option object internally so display/selection keep working.
  const selected =
    getOptionValue && value != null
      ? (options || []).find((option) => getOptionValue(option) === value)
      : value;

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
    options: options || [],
    disabled,
    onChange,
    getOptionLabel: getOptionLabel || ((option: any) => option.label),
    refreshOptions,
    dependantId,
    value: selected,
  });

  const handleKeyDown = useKeyAction(() => onChange(undefined), disabled);
  const showDeleteIcon = selected != null && clearable && !disabled;

  return (
    <FieldWrapper
      onClick={handleToggleSelect}
      handleBlur={handleBlur}
      padding={padding}
      className={className}
      label={label}
      required={required}
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
              <IconButton
                type="button"
                aria-label={`${ariaLabelRemove} ${typeof getOptionLabel(selected) === 'string' ? getOptionLabel(selected) : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  !disabled && onChange(undefined);
                }}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                tabIndex={disabled ? -1 : 0}
              >
                <ClearIcon name={IconName.close} />
              </IconButton>
            )}
            <IconButton
              type="button"
              aria-label={ariaLabelDropDownIcon}
              onClick={(e) => {
                e.stopPropagation();
                !disabled && handleToggleSelect();
              }}
              disabled={disabled}
              tabIndex={disabled ? -1 : 0}
            >
              <StyledIcon name={IconName.dropdownArrow} />
            </IconButton>
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
          selected ? (getOptionComponent?.(selected) ?? getOptionLabel(selected)) : placeholder
        }
        selectedValue={selected}
      />
      <OptionsContainer
        options={suggestions}
        getOptionLabel={(getOptionComponent as any) || getOptionLabel}
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

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const ClearIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
`;

const StyledIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
  margin-right: 12px;
`;

export default SelectField;
