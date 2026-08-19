import { useEffect, useId, useRef } from 'react';
import styled, { css } from 'styled-components';

export interface CheckboxProps {
  value?: boolean;
  name?: string;
  onChange: (value: boolean) => void;
  onKeyDown?: () => void;
  disabled?: boolean;
  label?: any;
  description?: string;
  error?: boolean;
  className?: string;
  intermediate?: boolean;
  displayAsButton?: boolean;
  variant?: string;
  width?: string;
  radius?: number;
}

const Checkbox = ({
  value = false,
  name,
  onChange,
  disabled = false,
  label,
  description,
  error,
  className,
  intermediate,
  displayAsButton,
  variant = 'primary',
  width,
  radius,
}: CheckboxProps) => {
  const generatedId = useId();
  const inputId = name || generatedId;
  const descriptionId = `${inputId}-description`;
  const inputRef = useRef<HTMLInputElement>(null);
  const ContainerLabel = displayAsButton ? ButtonContainer : Container;

  // The mixed state is only reachable through the DOM property, there is no attribute for it.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!intermediate;
    }
  }, [intermediate]);

  return (
    <Wrapper $width={width} $displayAsButton={displayAsButton}>
      <ContainerLabel
        className={className}
        $disabled={disabled}
        $checked={value}
        $variant={variant}
        $radius={radius}
        htmlFor={inputId}
      >
        <Box
          $intermediate={intermediate}
          $error={error}
          $checked={value}
          $hidden={displayAsButton}
          $disabled={disabled}
        >
          <CheckBox
            ref={inputRef}
            type="checkbox"
            id={inputId}
            name={name}
            checked={value || false}
            disabled={disabled}
            aria-label={label ? undefined : name}
            aria-describedby={description ? descriptionId : undefined}
            onChange={(v) => {
              onChange(v.target.checked);
            }}
            onClick={(e) => {
              e?.stopPropagation();
            }}
          />
          <CheckMark viewBox="0 0 16 16" aria-hidden="true" $visible={!!(value || intermediate)}>
            <path d={intermediate ? 'M4.2 8 11.8 8' : 'M4 8.4 6.6 11.1 12.2 5.1'} />
          </CheckMark>
        </Box>
        <Column $displayAsButton={displayAsButton}>
          <Label>{label}</Label>
          {description && <Description id={descriptionId}>{description}</Description>}
        </Column>
      </ContainerLabel>
    </Wrapper>
  );
};

interface ContainerProps {
  $disabled?: boolean;
  $checked?: boolean;
  $variant?: string;
  $radius?: number;
}

const Wrapper = styled.div<{ $displayAsButton?: boolean; $width?: string }>`
  width: ${({ $width, $displayAsButton }) => ($displayAsButton && $width) || 'fit-content'};
`;

const Box = styled.div<{
  $checked?: boolean;
  $error?: boolean;
  $disabled?: boolean;
  $intermediate?: boolean;
  $hidden?: boolean;
}>`
  position: relative;
  flex-shrink: 0;
  /* Hidden in button mode, where the whole label is the control. Kept in the layout
     with a zero size instead of visibility hidden, so the input stays focusable. */
  overflow: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
  width: ${({ $hidden }) => ($hidden ? '0' : '18px')};
  height: ${({ $hidden }) => ($hidden ? '0' : '18px')};
  /* Optically centers the box against the first line of the label. */
  margin-top: 1px;
  border-radius: ${({ theme }) => theme.radius?.checkbox ?? theme.radius?.fields ?? 0.4}rem;
  border: ${({ $hidden }) => ($hidden ? '0' : '1.5px')} solid
    ${({ theme, $checked, $error, $intermediate }) =>
      $error
        ? theme.colors.danger
        : $checked || $intermediate
          ? theme.colors.primary
          : theme.colors.fields?.border || theme.colors.border};
  background-color: ${({ theme, $checked, $error, $intermediate }) =>
    $checked || $intermediate
      ? $error
        ? theme.colors.danger
        : theme.colors.primary
      : theme.colors.fields?.background || 'white'};
  color: white;
  transition:
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:has(input:focus-visible) {
    box-shadow: 0 0 0 3px
      ${({ theme, $error }) =>
        $error
          ? theme.colors.lightDanger || '#fee4e2'
          : theme.colors.primaryLighter || theme.colors.lighterPrimary || '#d7eafa'};
  }

  ${({ theme, $disabled, $checked, $error, $intermediate }) =>
    !$disabled &&
    !$checked &&
    !$intermediate &&
    !$error &&
    css`
      label:hover & {
        border-color: ${theme.colors.primary};
      }
    `}
`;

const CheckMark = styled.svg<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: scale(${({ $visible }) => ($visible ? 1 : 0.6)});
  transition:
    opacity 0.12s ease-in-out,
    transform 0.12s ease-in-out;
`;

const CheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
`;

const Container = styled.label<ContainerProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  user-select: none;
`;

const ButtonContainer = styled.label<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  user-select: none;
  background-color: ${({ $variant = 'primary', $checked, theme }) =>
    ($checked ? theme.colors.buttons?.[$variant]?.checked : undefined) ||
    theme.colors.buttons?.[$variant]?.background ||
    '#53B1FD'};
  color: ${({ $variant = 'primary', $checked, theme }) =>
    ($checked ? theme.colors.buttons?.[$variant]?.checkedText : undefined) ||
    theme.colors.buttons?.[$variant]?.text ||
    'white'};
  border: 1px solid
    ${({ $variant = 'primary', $checked, theme }) =>
      ($checked ? theme.colors.buttons?.[$variant]?.checkedBorder : undefined) ??
      (theme.colors.buttons?.[$variant]?.border || 'transparent')};
  border-radius: ${({ theme, $radius }) =>
    $radius ?? theme.radius?.checkBoxButton ?? theme.radius?.buttons ?? 0.4}rem;
  padding: ${({ theme }) => theme.padding?.buttons || '1.1rem 2rem'};
  transition:
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.48 : 0.6)};
  }
  &:has(input:focus-visible) {
    box-shadow: 0 0 0 3px
      ${({ theme }) => theme.colors.primaryLighter || theme.colors.lighterPrimary || '#d7eafa'};
  }
`;

const Label = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fonts?.fieldLabels || 1.4}rem;
  font-weight: ${({ theme }) => theme.fontWeight?.fieldLabels || 400};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.fields?.label || '#4b5565'};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  text-align: left;
  font-size: ${({ theme }) => (theme.fonts?.fieldLabels || 1.4) - 0.2}rem;
  line-height: 1.4;
  color: #697586;
`;

const Column = styled.div<{ $displayAsButton?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  align-items: ${({ $displayAsButton }) => ($displayAsButton ? 'center' : 'flex-start')};
`;

export default Checkbox;
