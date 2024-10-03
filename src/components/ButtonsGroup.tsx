import { map } from 'lodash';
import styled from 'styled-components';
import FieldWrapper from './common/FieldWrapper';

export interface ButtonsGroupProps {
  options: any[];
  onChange: (option?: any) => void;
  isSelected: (option: any) => boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  getOptionLabel?: (option: any) => string;
}

const ButtonsGroup = ({
  options,
  onChange,
  disabled,
  isSelected,
  className,
  label,
  getOptionLabel,
}: ButtonsGroupProps) => {
  return (
    <div>
      <FieldWrapper className={className} label={label}>
        <Container className={className}>
          {map(options, (option, index) => (
            <StyledButton
              type="button"
              disabled={disabled}
              key={`group-button${index}`}
              left={index === 0}
              right={index === options.length - 1}
              selected={isSelected(option)}
              onClick={() => (disabled ? {} : onChange(option))}
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
  left: boolean;
  right: boolean;
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
  :hover {
    opacity: ${({ disabled }) => (disabled ? 0.48 : 0.6)};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary + '1F' : 'white')};
  color: #121926;
  justify-content: center;
  border-width: 1px;
  border-top-left-radius: ${({ left, theme }) => (left ? theme.radius?.fields : 0)}rem;
  border-bottom-left-radius: ${({ left, theme }) => (left ? theme.radius?.fields : 0)}rem;
  border-top-right-radius: ${({ right, theme }) => (right ? theme.radius?.fields : 0)}rem;
  border-bottom-right-radius: ${({ right, theme }) => (right ? theme.radius?.fields : 0)}rem;
`;

export default ButtonsGroup;
