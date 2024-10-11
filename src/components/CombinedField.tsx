import { JSX, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../index';
import Icon, { IconName } from './common/Icons';
import OptionsContainer from './common/OptionsContainer';
import NumericTextField from './NumericTextField';

export interface CombinedFieldProps {
  value: { input: string; option: string };
  onChange: (option: { input: string; option: string }) => void;
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

  const handleChange = (input) => {
    setShowSelect(false);
    onChange({
      ...value,
      ...input,
    });
  };

  const renderOptions = () => {
    return (
      <OptionsWrapper>
        <SelectedOption
          onBlur={handleBlur}
          onClick={() => setShowSelect(!showSelect)}
          $width={optionsWidth}
        >
          {value?.option}
          <IconContainer>
            <StyledIcon name={IconName.dropdownArrow} />
          </IconContainer>
        </SelectedOption>
        <StyledOptionsContainer
          values={options}
          getOptionLabel={(option) =>
            getOptionLabel ? getOptionLabel(option) : <Option>{option}</Option>
          }
          showSelect={showSelect}
          handleClick={(option) => {
            handleChange({ option: getOptionValue ? getOptionValue(option) : option });
          }}
          $width={optionsWidth}
        />
      </OptionsWrapper>
    );
  };

  return (
    <>
      {numeric ? (
        <NumericTextField
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

const IconContainer = styled.div<{ $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const OptionsWrapper = styled.div``;
const SelectedOption = styled.div<{ $width?: number }>`
  display: flex;
  justify-content: space-between;
  padding: 0 9px 0 16px;
  width: ${({ $width }) => $width || 8}rem;
  height: ${({ theme }) => `${theme.height?.fields || 5.6}rem`};
  border-left: ${({ theme }) => `1px solid ${theme.colors.border}`};
  align-items: center;
  cursor: pointer;
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
