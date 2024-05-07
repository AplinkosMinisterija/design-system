import styled from 'styled-components';
import Icon from './common/Icons';
import { useAsyncSelectData } from './common/hooks';
import FieldWrapper from './common/FieldWrapper';
import TextFieldInput from './common/TextFieldInput';
import OptionsContainer, { OptionContainerTexts } from './common/OptionsContainer';

export interface AsyncSelectFieldProps {
  name?: string;
  label?: string;
  value?: any;
  error?: string;
  showError?: boolean;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel: (option: any) => string;
  getInputLabel?: (option: any) => string;
  className?: string;
  placeholder?: string;
  hasBorder?: boolean;
  loadOptions: (input: any, page: number, id?: any) => any;
  dependantValue?: string;
  optionsKey?: string;
  hasOptionKey?: boolean;
  texts?: OptionContainerTexts;
}

const AsyncSelectField = ({
  label,
  value,
  error,
  showError = true,
  className,
  padding,
  optionsKey = 'rows',
  hasOptionKey = true,
  onChange,
  name,
  disabled = false,
  getOptionLabel = (option) => option.label,
  getInputLabel,
  loadOptions,
  dependantValue,
  placeholder = '',
  texts,
}: AsyncSelectFieldProps) => {
  const {
    loading,
    handleScroll,
    suggestions,
    handleInputChange,
    handleToggleSelect,
    input,
    showSelect,
    handleBlur,
    handleClick,
  } = useAsyncSelectData({
    loadOptions,
    disabled,
    onChange,
    dependantValue,
    optionsKey,
    hasOptionKey,
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
        rightIcon={<StyledIcon name={'dropdownArrow'} />}
        onChange={handleInputChange}
        disabled={disabled}
        placeholder={
          value ? (getInputLabel ? getInputLabel(value) : getOptionLabel(value)) : placeholder
        }
        selectedValue={value}
      />

      <OptionsContainer
        loading={loading}
        handleScroll={handleScroll}
        values={suggestions}
        getOptionLabel={getOptionLabel}
        showSelect={showSelect}
        handleClick={handleClick}
        texts={texts}
      />
    </FieldWrapper>
  );
};

const StyledIcon = styled(Icon)`
  color: #cdd5df;
  font-size: 2.4rem;
  margin-right: 12px;
`;

export default AsyncSelectField;
