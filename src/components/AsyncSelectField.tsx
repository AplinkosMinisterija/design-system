import { JSX } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useAsyncSelectData, useKeyAction } from './common/hooks';
import Icon, { IconName } from './common/Icons';
import OptionsContainer, { OptionContainerTexts } from './common/OptionsContainer';
import TextFieldInput from './common/TextFieldInput';
import { SelectOption } from '../types';

export interface AsyncSelectFieldProps<T extends SelectOption = SelectOption> {
  name: string;
  label?: string;
  required?: boolean;
  value?: T;
  error?: string;
  showError?: boolean;
  padding?: string;
  onChange: (option?: T | null) => void;
  disabled?: boolean;
  getOptionLabel: (option: T) => string | JSX.Element;
  getOptionComponent?: (option: T) => string | JSX.Element;
  className?: string;
  placeholder?: string;
  hasBorder?: boolean;
  loadOptions: (input: string, page: number, id?: string) => Promise<any>;
  dependantValue?: string;
  optionsKey?: string;
  hasOptionKey?: boolean;
  texts?: OptionContainerTexts;
  handleGetNextPageParam?: (params: any) => number | undefined;
  ariaLabelRemove?: string;
  ariaLabelDropDownIcon?: string;
  getOptionId?: (option: T) => string | number;
}

const AsyncSelectField = <T extends SelectOption = SelectOption>({
  label,
  required,
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
  getOptionComponent,
  loadOptions,
  dependantValue,
  placeholder = '',
  ariaLabelRemove = 'Pašalinti',
  ariaLabelDropDownIcon = 'Išskleidimo ikonėlė',
  texts,
  handleGetNextPageParam = (data) => {
    return data?.page < data?.totalPages ? data.page + 1 : undefined;
  },
  getOptionId = (option: T) => (option?.id as string | number) ?? '',
}: AsyncSelectFieldProps<T>) => {
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
    handleKeyDown: handleInputKeyDown,
    activeOption,
  } = useAsyncSelectData({
    loadOptions,
    disabled,
    onChange,
    dependantValue,
    optionsKey,
    handleGetNextPageParam,
    name,
  });

  const handleKeyDown = useKeyAction(() => onChange(undefined), disabled);
  const placeholderValue = value ? getOptionLabel(value) : placeholder;

  const activeOptionId =
    activeOption === undefined ? undefined : `${name}-option-${getOptionId(activeOption)}`;

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
        right={
          <>
            {value && !disabled && (
              <IconButton
                type="button"
                aria-label={`${ariaLabelRemove} ${
                  typeof getOptionLabel(value) === 'string' ? getOptionLabel(value) : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  !disabled && onChange(undefined);
                }}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                tabIndex={disabled ? -1 : 0}
              >
                <ClearIcon name={IconName.close} $disabled={disabled} />
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
          </>
        }
        onChange={handleInputChange}
        disabled={disabled}
        placeholder={placeholderValue}
        selectedValue={!!value}
        role="combobox"
        aria-expanded={showSelect}
        aria-controls={`${name}-options`}
        aria-haspopup="listbox"
        aria-activedescendant={activeOptionId}
        onKeyDown={handleInputKeyDown}
      />
      <OptionsContainer
        loading={loading}
        observerRef={observerRef}
        options={suggestions}
        getOptionLabel={getOptionComponent || getOptionLabel}
        getOptionId={getOptionId}
        name={name}
        activeOptionId={activeOptionId}
        selectedOption={value}
        showSelect={showSelect}
        handleClick={handleClick}
        texts={texts}
      />
    </FieldWrapper>
  );
};

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

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.fields?.icon || '#cdd5df'};
  font-size: 2.4rem;
  margin-right: 12px;
`;

const ClearIcon = styled(Icon)<{ $disabled: boolean }>`
  color: ${({ theme }) => theme.colors.fields?.icon || '#cdd5df'};
  font-size: 2.4rem;
  margin-right: 12px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export default AsyncSelectField;
