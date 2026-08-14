import { JSX, useId, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../index';
import Icon, { IconName } from './common/Icons';
import { useOptionNavigation } from './common/hooks';
import OptionsContainer from './common/OptionsContainer';
import NumericField from './NumericField';

export interface CombinedFieldProps {
  value: { input: string | number; option: string };
  onChange: (option: { input: string | number; option: string }) => void;
  name?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  height?: number;
  onInputClick?: () => void;
  placeholder?: string;
  options?: any[];
  getOptionLabel?: (option: any) => string | JSX.Element;
  getOptionValue?: (option: any) => any;
  optionsWidth?: number;
  showError?: boolean;
  className?: string;
  numeric?: boolean;
}

/** One entry of the unit dropdown — as loose as the public `options` prop. */
type CombinedOption = NonNullable<CombinedFieldProps['options']>[number];

const CombinedField = ({
  value = {
    input: '4',
    option: 'kg',
  },
  label = '',
  name,
  error,
  onChange,
  placeholder,
  disabled,
  height,
  onInputClick,
  options = ['kg', 'l', 'ml'],
  getOptionLabel,
  getOptionValue,
  optionsWidth,
  className,
  showError = false,
  numeric,
}: CombinedFieldProps) => {
  const [showSelect, setShowSelect] = useState(false);

  const handleBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
    }
  };

  const handleChange = (input: Partial<{ input: string | number; option: string }>) => {
    setShowSelect(false);
    onChange({
      ...value,
      ...input,
    });
  };

  const pickOption = (option: CombinedOption) =>
    handleChange({ option: getOptionValue ? getOptionValue(option) : option });

  const listId = `${useId()}-listbox`;
  const { activeOption, handleKeyDown } = useOptionNavigation({
    options,
    disabled,
    showSelect,
    setShowSelect,
    onSelect: pickOption,
  });
  const activeOptionId =
    activeOption === undefined ? undefined : `${listId}-option-${options.indexOf(activeOption)}`;

  const renderOptions = () => {
    return (
      <OptionsWrapper>
        <SelectedOption
          onBlur={handleBlur}
          onClick={() => !disabled && setShowSelect(!showSelect)}
          // The unit picker was a plain div: not focusable, so it could not be
          // reached or opened from the keyboard at all.
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={showSelect}
          aria-controls={listId}
          aria-haspopup="listbox"
          aria-activedescendant={activeOptionId}
          aria-disabled={disabled}
          aria-label={label}
          $width={optionsWidth}
          $disabled={disabled}
        >
          {value?.option}
          <IconContainer $disabled={disabled}>
            <StyledIcon name={IconName.dropdownArrow} />
          </IconContainer>
        </SelectedOption>
        <StyledOptionsContainer
          id={listId}
          name={listId}
          activeOptionId={activeOptionId}
          getOptionId={(_option, index) => index}
          selectedOption={value?.option}
          options={options}
          getOptionLabel={(option) =>
            getOptionLabel ? getOptionLabel(option) : <Option>{option}</Option>
          }
          showSelect={showSelect}
          handleClick={pickOption}
          $width={optionsWidth}
        />
      </OptionsWrapper>
    );
  };

  return (
    <>
      {numeric ? (
        <NumericField
          className={className}
          label={label}
          showError={showError}
          value={value?.input}
          name={name}
          error={error}
          right={renderOptions()}
          onChange={(input) => handleChange({ input })}
          disabled={disabled}
          height={height}
          onInputClick={onInputClick}
          placeholder={placeholder}
        />
      ) : (
        <TextField
          className={className}
          label={label}
          showError={showError}
          value={value?.input}
          name={name}
          error={error}
          right={renderOptions()}
          onChange={(input) => handleChange({ input })}
          disabled={disabled}
          height={height}
          onInputClick={onInputClick}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

const StyledIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
`;

const IconContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const OptionsWrapper = styled.div``;
const SelectedOption = styled.div<{ $width?: number; $disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0 9px 0 16px;
  width: ${({ $width }) => $width || 8}rem;
  height: ${({ theme }) => `${theme.height?.fields || 5.6}rem`};
  border-left: ${({ theme }) => `1px solid ${theme.colors.border}`};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  align-items: center;
`;

const StyledOptionsContainer = styled(OptionsContainer)<{ $width?: number }>`
  width: ${({ $width }) => $width || 8}rem;
  font-size: ${({ theme }) => theme.fontSize?.fields || 1.6}rem;
`;

const Option = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize?.fields || 1.6}rem;
`;

export default CombinedField;
