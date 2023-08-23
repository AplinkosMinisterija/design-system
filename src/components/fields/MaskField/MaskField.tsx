import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FieldWrapper from "../../internal/FieldWrapper";

interface TextFieldProps {
  mask: string;
  maskChar: string;
  value?: string;
  name?: string;
  error?: string;
  showError?: boolean;
  label?: string;
  icon?: JSX.Element;
  className?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  padding?: string;
  onChange: (option?: any) => void;
  bottomLabel?: string;
  disabled?: boolean;
  height?: number;
  readOnly?: boolean;
  onInputClick?: () => void;
  subLabel?: string;
  placeholder?: string;
  type?: string;
  secondLabel?: JSX.Element;
  selectedValue?: boolean;
  onBlur?: () => void;

}

const MaskField = ({
  value = "",
  name,
  error,
  showError = true,
  readOnly = false,
  label,
  className,
  leftIcon,
  rightIcon,
  padding,
  onChange,
  subLabel,
  placeholder,
  onBlur,
  bottomLabel,
  type,
  disabled,
  height,
  secondLabel,
  mask,
  maskChar
}: TextFieldProps) => {
  const maskRegex = /[^/:\s]/g;
  const valueRegex = /[\/:_]/g;
  let newMask = mask.replaceAll(maskRegex, maskChar);
  const ref = useRef<any>(null);
  const setCharAt = (str: any, index: number, chr: any) => {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  };
  const handleGetValue = () => {
    let i = 0;
    let j = 0;
    while (i < newMask.length) {
      if (value[j] && newMask[i] === maskChar) {
        newMask = setCharAt(newMask, i, value[j]);
        j++;
      }
      i++;
    }
    return newMask;
  };

  const handleSetValue = (e: any) => {
    const { value } = e.target;
    const filteredValue = value.replaceAll(valueRegex, "");
    if (filteredValue.length - 1 === mask.replaceAll(valueRegex, "").length)
      return;
    return onChange(filteredValue);
  };

  useEffect(() => {
    const input = ref.current;
    if (input) {
      const index =
        input.value
          .split("")
          .findLastIndex((item: any) => /^[0-9a-zA-Z]$/i.test(item)) + 1;
      input.setSelectionRange(index, index);
    }
  }, [ref, value]);

  return (
    <FieldWrapper
      padding={padding}
      className={className}
      label={label}
      subLabel={subLabel}
      secondLabel={secondLabel}
      error={error}
      showError={showError}
      bottomLabel={bottomLabel}
    >
      <Container>
        <InputContainer
          error={!!error}
          height={height || 40}
          onBlur={onBlur}
          disabled={disabled || false}
        >
          {leftIcon}
          <TextInput
            ref={ref}
            readOnly={readOnly}
            type={type}
            name={name}
            autoComplete="off"
            value={handleGetValue()}
            onChange={handleSetValue}
            placeholder={placeholder}
            disabled={disabled}
          />
          {rightIcon}
        </InputContainer>
      </Container>
    </FieldWrapper>
  );
};

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  z-index: 1111;
  left: -5px;
  color: transparent;
  background-color: transparent;
  padding: 4px 4px;
  max-width: 100%;
  border-radius: 4px;
  word-break: break-all;
  opacity: 1 !important;
  &:before {
    content: "";
    z-index: 38;
    width: 0;
    height: 0;
    left: 3px;
    top: -4px;
    position: absolute;
    border: 5px solid transparent;
    transform: rotate(135deg);
  }

  display: block;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 4px 4px;
  &:before {
    border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
  }
`;

export const Container = styled.div`
  position: relative;
`;

const InputContainer = styled.div<{
  error: boolean;
  height: number;
  disabled: boolean;
}>`
  display: flex;
  height: ${({ height }) => (height ? `${height}px` : `40px`)};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.border)};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  :focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}33`};
  }

  opacity: ${({ disabled }) => (disabled ? 0.48 : 1)};
`;

const TextInput = styled.input<{ readOnly: boolean }>`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  background-color: white;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text.label};

  &:focus {
    outline: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default MaskField;
