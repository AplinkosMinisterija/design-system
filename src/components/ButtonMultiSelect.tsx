import styled from 'styled-components';
import Checkbox from './Checkbox';
import { FieldWrapper } from '../index';
import React from 'react';

interface ButtonMultiSelectProps {
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
  error?: string;
  showError?: boolean;
  disabled?: boolean;
  padding?: string;
  buttonWidth?: string;
  labelButton?: JSX.Element;
  className?: string;
}

const ButtonMultiSelect: React.FC<ButtonMultiSelectProps> = ({
  options,
  values,
  onChange,
  labels,
  columns,
  variant,
  name,
  gap,
  radius,
  label,
  error,
  showError,
  disabled,
  padding,
  className,
  buttonWidth,
  labelButton,
}) => {
  const handleSelect = (option: string, selected: boolean) => {
    let updatedValues;
    if (selected) {
      updatedValues = values.includes(option) ? values : [...values, option];
    } else {
      updatedValues = values.filter((o) => o !== option);
    }
    onChange(updatedValues);
  };

  return (
    <FieldWrapper
      label={label}
      error={error}
      showError={showError}
      padding={padding}
      className={className}
      labelButton={labelButton}
    >
      <Container $gap={gap} $columns={columns} $errorVisible={!!error && !!showError}>
        {options.map((option, index) => {
          return (
            <Checkbox
              key={`button-multi-select${index}`}
              onChange={(selected) => {
                handleSelect(option, selected);
              }}
              name={`${name}_${option}`}
              label={labels?.[option] || option}
              displayAsButton={true}
              variant={variant}
              width={buttonWidth}
              value={values?.includes(option)}
              disabled={disabled}
              radius={radius}
            />
          );
        })}
      </Container>
    </FieldWrapper>
  );
};

const Container = styled.div<{
  $gap?: number;
  $columns?: number;
  $errorVisible?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns ?? 4}, 1fr);
  gap: ${({ $gap, theme }) => $gap ?? theme.gap?.buttonMultiSelect ?? 0.8}rem;
`;

export default ButtonMultiSelect;
