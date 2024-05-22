import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useAsyncSelectData } from './common/hooks';
import Icon from './common/Icons';
import OptionsContainer, { OptionContainerTexts } from './common/OptionsContainer';
import TextFieldInput from './common/TextFieldInput';
import { JSX } from 'react';

export interface AsyncSelectFieldProps {
  name?: string;
  label?: string;
  value?: any;
  error?: string;
  showError?: boolean;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel: (option: any) => string | JSX.Element;
  getInputValue: (option: any) => string;
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
  onChange,
  name,
  disabled = false,
  getOptionLabel,
  getInputValue,
  loadOptions,
  dependantValue,
  placeholder = '',
  texts = { noOptions: 'Nėra pasirinkimų' },
}: AsyncSelectFieldProps) => {
  const {
    loading,
    suggestions,
    handleInputChange,
    handleToggleSelect,
    input,
    showSelect,
    handleBlur,
    handleClick,
    observerRef,
  } = useAsyncSelectData({
    loadOptions,
    disabled,
    onChange,
    dependantValue,
    optionsKey,
  });

  const placeholderValue = value ? getInputValue(value) : placeholder;

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
        placeholder={placeholderValue}
        selectedValue={value}
      />
      <OptionsContainer
        loading={loading}
        observerRef={observerRef}
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
