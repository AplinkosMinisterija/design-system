import { JSX } from 'react';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useAsyncSelectData, useKeyAction } from './common/hooks';
import Icon, { IconName } from './common/Icons';
import OptionsContainer, { OptionContainerTexts } from './common/OptionsContainer';
import TextFieldInput from './common/TextFieldInput';

export interface AsyncSelectFieldProps {
  name: string;
  label?: string;
  value?: any;
  error?: string;
  showError?: boolean;
  padding?: string;
  onChange: (option: any) => void;
  disabled?: boolean;
  getOptionLabel: (option: any) => string;
  getOptionComponent?: (option: any) => string | JSX.Element;
  className?: string;
  placeholder?: string;
  hasBorder?: boolean;
  loadOptions: (input: any, page: number, id?: any) => any;
  dependantValue?: string;
  optionsKey?: string;
  hasOptionKey?: boolean;
  texts?: OptionContainerTexts;
  handleGetNextPageParam?: (params: any) => number | undefined;
  ariaLabelRemove?: string;
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
  getOptionComponent,
  loadOptions,
  dependantValue,
  placeholder = '',
  ariaLabelRemove,
  texts,
  handleGetNextPageParam = (data) => {
    return data?.page < data?.totalPages ? data.page + 1 : undefined;
  },
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
    handleGetNextPageParam,
    name,
  });
  const handleKeyDown = useKeyAction(() => onChange(undefined), disabled);
  const placeholderValue = value ? getOptionLabel(value) : placeholder;
  const activeOptionId = value ? `${name}-option-${value?.id || value}` : undefined;

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
        label={label}
        value={input}
        name={name}
        error={error}
        right={
          <>
            {value && !disabled && (
              <IconContainer
                role="button"
                tabIndex={0}
                aria-label={`${ariaLabelRemove} ${typeof getOptionLabel(value) === 'string' ? getOptionLabel(value) : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  !disabled && onChange(undefined);
                }}
                onKeyDown={handleKeyDown()}
              >
                <ClearIcon name={IconName.close} />
              </IconContainer>
            )}
            <StyledIcon name={IconName.dropdownArrow} />
          </>
        }
        onChange={handleInputChange}
        disabled={disabled}
        placeholder={placeholderValue}
        selectedValue={value}
        role="combobox"
        ariaExpanded={showSelect}
        ariaControls={`${name}-options`}
        ariaHaspopup="listbox"
        ariaActivedescendant={activeOptionId}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'Enter') {
            e.preventDefault();
            handleToggleSelect();
          }
        }}
      />
      <OptionsContainer
        loading={loading}
        observerRef={observerRef}
        options={suggestions}
        getOptionLabel={getOptionComponent || getOptionLabel}
        showSelect={showSelect}
        handleClick={handleClick}
        texts={texts}
      />
    </FieldWrapper>
  );
};

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

const IconContainer = styled.div<{ $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export default AsyncSelectField;
