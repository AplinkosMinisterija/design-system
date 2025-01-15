import { map } from 'lodash';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';
import { useKeyAction } from './common/hooks';

export interface ButtonsGroupProps {
  options: any[];
  onChange: (option?: any) => void;
  isSelected: (option: any) => boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  getOptionLabel?: (option: any) => string;
  error?: string;
  showError?: boolean;
}

const ButtonsGroup = ({
  options,
  onChange,
  disabled,
  isSelected,
  className,
  label = '',
  showError = true,
  error,
  getOptionLabel,
}: ButtonsGroupProps) => {
  const handleKeyDown = useKeyAction(onChange, disabled);
  return (
    <div>
      <FieldWrapper className={className} label={label} error={error} showError={showError}>
        <Container className={className} role="radiogroup" aria-labelledby={label}>
          {map(options, (option, index) => (
            <StyledButton
              type="button"
              key={`group-button-${index}`}
              role="radio"
              aria-checked={isSelected(option)}
              disabled={disabled}
              selected={isSelected(option)}
              onKeyDown={handleKeyDown(option)}
              onClick={() => (disabled ? {} : onChange(option))}
              tabIndex={0}
            >
              {getOptionLabel ? getOptionLabel(option) : option.name}
            </StyledButton>
          ))}
        </Container>
      </FieldWrapper>
    </div>
  );
};

const Container = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const StyledButton = styled.button<{
  selected: boolean;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;

  padding: ${({ theme }) => theme.padding?.buttons || '1.1rem 2rem'};
  background-color: ${({ selected, theme }) =>
    selected ? `${theme.colors.primary}33` : 'inherit'};

  border-color: ${({ selected, theme }) => (selected ? theme.colors.primary : '#cdd5df')};
  border-style: solid;
  font-weight: normal;
  font-size: 1.4rem;
  opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.48 : 0.6)};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text?.focus || '#121926'};
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary + '1F' : 'white')};
  color: #121926;
  justify-content: center;
  border-width: 1px;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radius?.fields || 0}rem;
    border-bottom-left-radius: ${({ theme }) => theme.radius?.fields || 0}rem;
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.radius?.fields || 0}rem;
    border-bottom-right-radius: ${({ theme }) => theme.radius?.fields || 0}rem;
  }
`;

export default ButtonsGroup;
