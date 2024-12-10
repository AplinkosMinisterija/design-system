import { JSX, useState } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import Icon, { IconName } from './common/Icons';
import OptionsContainer from './common/OptionsContainer';
import TextFieldInput from './common/TextFieldInput';

interface SimpleSelectProps {
  name?: string;
  label?: string;
  value?: any;
  error?: string;
  showError?: boolean;
  options?: any[];
  left?: JSX.Element;
  right?: JSX.Element;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel: (option: any) => string;
  getOptionComponent?: (option: any) => string | JSX.Element;
  className?: string;
  placeholder?: string;
}

const SimpleSelect = ({
  label,
  value,
  name,
  error,
  showError = true,
  placeholder,
  options,
  className,
  left,
  right,
  padding,
  getOptionLabel,
  getOptionComponent,
  onChange,
  disabled,
}: SimpleSelectProps) => {
  const [showSelect, setShowSelect] = useState(false);
  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
    }
  };

  const handleClick = (option: any) => {
    setShowSelect(false);
    onChange(option);
  };

  return (
    <FieldWrapper
      onClick={() => setShowSelect(!showSelect)}
      handleBlur={handleBlur}
      padding={padding}
      className={className}
      label={label}
      error={error}
      showError={showError}
    >
      <TextFieldInput
        label={label}
        value={value ? getOptionLabel(value) : undefined}
        name={name}
        error={error}
        left={left}
        right={right || <StyledIcon name={IconName.dropdownArrow} />}
        selectedValue={value}
        disabled={disabled}
        placeholder={placeholder}
      />
      <OptionsContainer
        options={options}
        getOptionLabel={getOptionComponent || getOptionLabel}
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

export default SimpleSelect;
