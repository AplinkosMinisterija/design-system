import TextFieldInput from './common/TextFieldInput';
import FieldWrapper from './common/FieldWrapper';
import { JSX, useState } from 'react';
import OptionsContainer from './common/OptionsContainer';
import styled from 'styled-components';
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

  const handleChange = (input) => {
    onChange({
      ...value,
      ...input,
    });
  };

  return (
    <FieldWrapper className={className} label={label} error={error} showError={showError}>
      {numeric ? (
        <NumericTextField
          value={value?.input}
          name={name}
          error={error}
          right={
            <OptionsWrapper>
              <SelectedOption onClick={() => setShowSelect(!showSelect)} $width={optionsWidth}>
                {value?.option}
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
              />
            </OptionsWrapper>
          }
          onChange={(input) => handleChange({ input })}
          disabled={disabled}
          height={height}
          onInputClick={onInputClick}
          placeholder={placeholder}
        />
      ) : (
        <TextFieldInput
          value={value?.input}
          name={name}
          error={error}
          right={
            <OptionsWrapper>
              <SelectedOption onClick={() => setShowSelect(!showSelect)} $width={optionsWidth}>
                {value?.option}
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
              />
            </OptionsWrapper>
          }
          onChange={(input) => handleChange({ input })}
          disabled={disabled}
          height={height}
          onInputClick={onInputClick}
          placeholder={placeholder}
        />
      )}
    </FieldWrapper>
  );
};

const OptionsWrapper = styled.div``;
const SelectedOption = styled.div<{ $width?: number }>`
  display: flex;
  width: ${({ $width }) => $width || 8}rem;
  height: ${({ theme }) => `${theme.height?.fields || 5.6}rem`};
  border-left: ${({ theme }) => `1px solid ${theme.colors.border}`};
  justify-content: center;
  align-items: center;
`;

const StyledOptionsContainer = styled(OptionsContainer)<{ $width?: number }>`
  width: ${({ $width }) => $width || 8}rem;
  font-size: ${({ theme }) => theme.fontSize.fields || 1.6}rem;
`;

const Option = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.fields || 1.6}rem;
`;

export default CombinedField;
