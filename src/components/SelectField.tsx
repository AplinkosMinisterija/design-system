import styled from 'styled-components';
import { useSelectData } from '@/common/hooks';
import FieldWrapper from '@/common/FieldWrapper';
import TextFieldInput from '@/common/TextFieldInput';
import OptionsContainer from '@/common/OptionsContainer';
import Icon from '@/common/Icons';

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
  className?: string;
  placeholder?: string;
  dependantId?: string;
  refreshOptions?: (dependantId?: string) => any;
}

const SelectField = ({
  label,
  value,
  name,
  error,
  showError = true,
  placeholder,
  options,
  className,
  left,
  padding,
  getOptionLabel,
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
        leftIcon={left}
        rightIcon={<StyledIcon name={'dropdownArrow'} />}
        onChange={handleOnChange}
        disabled={disabled}
        placeholder={(value && getOptionLabel(value)) || placeholder}
        selectedValue={value}
      />
      <OptionsContainer
        values={suggestions}
        getOptionLabel={getOptionLabel}
        loading={loading}
        showSelect={showSelect}
        handleClick={handleClick}
      />
    </FieldWrapper>
  );
};

const StyledIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
  margin-right: 12px;
`;

export default SelectField;
