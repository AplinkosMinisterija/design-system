import styled from 'styled-components';
import Checkbox from './Checkbox';
import { FieldWrapper } from '../index';

const ButtonMultiSelect = ({
  options,
  values,
  onChange,
  labels,
  columns = 4,
  variant,
  name,
  gap,
  radius,
  label,
}: {
  options: string[];
  values: string[];
  onChange: (data: string[]) => void;
  labels?: { [key: string]: string };
  columns?: number;
  variant?: string;
  name?: string;
  gap?: number;
  radius?: number;
  label?: string;
}) => {
  const handleSelect = (option, selected) => {
    let updatedValues = values;
    if (selected) {
      updatedValues = values.includes(option) ? values : [...values, option];
    } else {
      updatedValues = values.filter((o) => o !== option);
    }
    onChange(updatedValues);
  };

  return (
    <FieldWrapper label={label}>
      <Container $cols={columns} $gap={gap} $labelVisible={!!label}>
        {options.map((option) => {
          return (
            <Checkbox
              onChange={(selected) => {
                handleSelect(option, selected);
              }}
              name={`${name}_${option}`}
              label={labels?.[option] || option}
              displayAsButton={true}
              variant={variant}
              width={'100%'}
              radius={radius}
              value={values?.includes(option)}
            />
          );
        })}
      </Container>
    </FieldWrapper>
  );
};

const Container = styled.div<{ $cols: number; $gap: number; $labelVisible: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  gap: ${({ $gap, theme }) => $gap || theme.gap?.buttonMultiSelect || 0.8}rem;
  padding-top: ${({ $labelVisible, $gap }) => ($labelVisible ? $gap || 1.6 : 0)}rem;
`;

export default ButtonMultiSelect;
