import { JSX } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useSelectData } from './common/hooks';
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
        value={input}
        name={name}
        error={error}
        left={left}
        right={
          <RightContainer>
            {!!value && !!clearable && !disabled && (
              <IconContainer
                $disabled={disabled}
                onClick={(e) => {
                  e.stopPropagation();
                  !disabled && onChange(undefined);
                }}
              >
                <ClearIcon $disabled={disabled!} name={IconName.close} />
              </IconContainer>
            )}
            <StyledIcon name={IconName.dropdownArrow} />
          </RightContainer>
        }
        onChange={handleOnChange}
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
        values={suggestions}
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
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const IconContainer = styled.div<{ $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const StyledIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
  margin-right: 12px;
`;

export default SelectField;
