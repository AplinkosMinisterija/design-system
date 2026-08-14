import { JSX, useId, useState } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import Icon, { IconName } from './common/Icons';
import { useOptionNavigation } from './common/hooks';
import OptionsContainer from './common/OptionsContainer';
import TextFieldInput from './common/TextFieldInput';

interface SimpleSelectProps {
  name?: string;
  label?: string;
  required?: boolean;
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
  required,
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

  const listId = `${useId()}-listbox`;
  const optionList = options || [];
  const { activeOption, handleKeyDown } = useOptionNavigation({
    options: optionList,
    disabled,
    showSelect,
    setShowSelect,
    onSelect: handleClick,
  });
  const activeOptionId =
    activeOption === undefined ? undefined : `${listId}-option-${optionList.indexOf(activeOption)}`;

  return (
    <FieldWrapper
      onClick={() => setShowSelect(!showSelect)}
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
        value={value ? getOptionLabel(value) : undefined}
        name={name}
        error={error}
        left={left}
        right={right || <StyledIcon name={IconName.dropdownArrow} />}
        selectedValue={value}
        disabled={disabled}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        role="combobox"
        ariaExpanded={showSelect}
        ariaControls={listId}
        ariaHaspopup="listbox"
        ariaActivedescendant={activeOptionId}
      />
      <OptionsContainer
        id={listId}
        name={listId}
        options={optionList}
        activeOptionId={activeOptionId}
        getOptionId={(_option, index) => index}
        selectedOption={value}
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
