import styled from 'styled-components';
import Checkbox from './Checkbox';
import { FieldWrapper } from '../index';
// @ts-ignore
import React from 'react';

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
  error,
  showError,
  disabled,
  padding,
  className,
  buttonWidth,
  labelButton,
}: React.FC<{
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
}>) => {
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
    <FieldWrapper
      label={label}
      error={error}
      showError={showError}
      padding={padding}
      className={className}
      labelButton={labelButton}
    >
      <Container
        $cols={columns}
        $gap={gap}
        $labelVisible={!!label}
        $errorVisible={!!error && !!showError}
      >
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
              radius={radius}
              value={values?.includes(option)}
              disabled={disabled}
            />
          );
        })}
      </Container>
    </FieldWrapper>
  );
};

const Container = styled.div<{
  $cols: number;
  $gap: number;
  $labelVisible: boolean;
  $errorVisible: boolean;
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ $gap, theme }) => $gap ?? theme.gap?.buttonMultiSelect ?? 0.8}rem;
`;

export default ButtonMultiSelect;
