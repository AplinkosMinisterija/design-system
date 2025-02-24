import { device } from 'src/utils';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';

export interface RadioOptionsProps {
  options: { label: string; value: any }[];
  name?: string;
  value?: string | boolean;
  error?: string;
  showError?: boolean;
  className?: string;
  onChange: (option: any) => void;
  label?: string;
  disabled?: boolean;
  column?: boolean;
  oneLine?: boolean;
}

const RadioOptions = ({
  options,
  column = false,
  value,
  error,
  showError = true,
  oneLine = false,
  name,
  onChange,
  className,
  disabled,
  label,
  ...rest
}: RadioOptionsProps) => {
  return (
    <Container oneLine={oneLine} className={className}>
      <FieldWrapper error={error} showError={showError} label={label}>
        <OptionsContainer column={column}>
          {options?.map((option, index) => {
            const key = `${name}_${option.value}`;
            return (
              <InputContainer key={key} first={index === 0}>
                <StyledInput
                  disabled={disabled}
                  type="radio"
                  name={name}
                  id={`${option.value}-${key}`}
                  value={option.value}
                  checked={value === option.value}
                  {...rest}
                  onChange={() => onChange(option.value)}
                />
                <OptionLabel disabled={!!disabled} htmlFor={`${option.value}-${key}`}>
                  {option.label}
                </OptionLabel>
              </InputContainer>
            );
          })}
        </OptionsContainer>
      </FieldWrapper>
    </Container>
  );
};

const Container = styled.div<{ oneLine?: boolean }>`
  padding: 8px 0;
  display: ${({ oneLine }) => (oneLine ? 'flex' : 'block')};
`;

const OptionsContainer = styled.div<{ column?: boolean }>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  @media ${device.mobileL} {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const InputContainer = styled.div<{ first: boolean }>`
  margin: 0 8px 0 0;

  @media ${device.mobileL} {
    margin-bottom: 10px;
  }
`;

const OptionLabel = styled.label<{ disabled: boolean }>`
  font-size: 1.4rem;
  color: #231f20;
  opacity: 1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledInput = styled.input<{ disabled?: boolean }>`
  & {
    display: none;
  }

  & + *::before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    margin-right: 1rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: ${({ theme }) => theme.colors.primary};
    opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  &:checked + *::before {
    background: radial-gradient(
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primary} 40%,
      transparent 50%,
      transparent 50%
    );
    opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover + *::before {
    ${({ disabled, theme }) =>
      !disabled &&
      `
      background: radial-gradient(
        ${theme.colors.primary} 0%,
        ${theme.colors.primary} 40%,
        transparent 50%,
        transparent 50%
      );
      opacity: 1;
      border-color: ${theme.colors.primary};
    `}
  }

  & + * {
    display: inline-block;
    padding: 0.5rem 2.4rem 0.5rem 0;
  }
`;

export default RadioOptions;
