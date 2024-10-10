import styled from 'styled-components';
import Checkbox from './Checkbox';

const ButtonMultiSelect = ({
  options,
  values,
  onChange,
  labels,
  columns = 4,
  variant,
  name,
  gap,
}: {
  options: string[];
  values: string[];
  onChange: (data: string[]) => void;
  labels?: { [key: string]: string };
  columns?: number;
  variant?: string;
  name?: string;
  gap?: number;
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
    <Container $cols={columns} $gap={gap}>
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
            value={values?.includes(option)}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div<{ $cols: number; $gap: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  gap: ${({ $gap, theme }) => $gap || theme.gap?.buttonMultiSelect || 0.8}rem;
`;

export default ButtonMultiSelect;
