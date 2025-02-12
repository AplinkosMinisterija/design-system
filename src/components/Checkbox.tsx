import styled, { css } from 'styled-components';
import { useKeyAction } from './common/hooks';

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
  const ariaChecked = intermediate ? 'intermediate' : value;
  const handleKeyDown = useKeyAction(onChange, disabled);
  const ariaValue = label || name;

  return (
    <Wrapper $width={width} $displayAsButton={displayAsButton}>
      <Container
        className={className}
        $disabled={disabled}
        $displayAsButton={displayAsButton}
        $variant={variant}
        $checked={value}
        $radius={radius}
        htmlFor={name}
      >
        <InnerContainer
          $intermediate={intermediate}
          $disabled={disabled}
          $error={error}
          $checked={value}
          $hidden={displayAsButton}
          role="checkbox"
          aria-checked={ariaChecked}
          aria-labelledby={ariaValue}
          aria-describedby={description ? description : undefined}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown(!value)}
        >
          <CheckBox
            type="checkbox"
            id={name}
            name={name}
            checked={value || false}
            disabled={disabled}
            onChange={(v) => {
              onChange(v.target.checked);
            }}
            onClick={(e) => {
              e?.stopPropagation();
            }}
            $displayAsButton={displayAsButton}
            aria-checked={ariaChecked}
          />
          <CheckMark checked={value || false} intermediate={intermediate} disabled={disabled} />
        </InnerContainer>
        <Column $displayAsButton={displayAsButton}>
          <Label>{label}</Label>
          {description && <Description>{description}</Description>}
        </Column>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $displayAsButton; $width: string }>`
  width: ${({ $width, $displayAsButton }) => ($displayAsButton && $width) || 'fit-content'};
`;

const buttonStyle = css<{
  $variant: string;
  $disabled: boolean;
  $checked: boolean;
  $radius: number;
}>`
  background-color: ${({ $variant, $checked, theme }) =>
    ($checked ? theme.colors.buttons?.[$variant]?.checked : undefined) ||
    theme.colors.buttons?.[$variant]?.background ||
    '#53B1FD'};
  color: ${({ $variant, $checked, theme }) =>
    ($checked ? theme.colors.buttons?.[$variant]?.checkedText : undefined) ||
    theme.colors.buttons?.[$variant]?.text ||
    'white'};
  border: 1px solid
    ${({ $variant, $checked, theme }) =>
      ($checked ? theme.colors.buttons?.[$variant]?.checkedBorder : undefined) ??
      (theme.colors.buttons?.[$variant]?.border || 'transparent')};
  border-radius: ${({ theme, $radius }) =>
    $radius ?? theme.radius?.checkBoxButton ?? theme.radius?.buttons ?? 0.4}rem;
  padding: ${({ theme }) => theme.padding?.buttons || '1.1rem 2rem'};
  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.48 : 0.6)};
  }
`;

const Container = styled.label<{
  $displayAsButton: boolean;
  $variant: string;
  $disabled: boolean;
  $checked: boolean;
  $radius: number;
}>`
  display: grid;
  grid-template-columns: ${({ $displayAsButton }) => ($displayAsButton ? '1fr' : '28px 1fr')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  ${({ $displayAsButton }) => ($displayAsButton ? buttonStyle : '')}
`;

const Label = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fonts?.fieldLabels || 1.4}rem;
  color: #4b5565;
`;

const Description = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fonts?.fieldLabels - 0.2 || 1.2}rem;
  color: #4b5565;
`;

const Column = styled.div<{ $displayAsButton: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: ${({ $displayAsButton }) => ($displayAsButton ? 'center' : 'flex-start')};
`;

const InnerContainer = styled.div<{
  $checked?: boolean;
  $error?: boolean;
  $disabled?: boolean;
  $intermediate?: boolean;
  $hidden?: boolean;
}>`
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
  position: relative;
  width: ${({ $hidden }) => ($hidden ? '0' : '18px')};
  height: ${({ $hidden }) => ($hidden ? '0' : '18px')};
  border-radius: 2px;
  background-color: ${({ theme, $checked, $error, $intermediate }) =>
    $checked || $intermediate
      ? theme.colors.primary
      : $error
        ? theme.colors.danger
        : theme.colors.border};
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const CheckMark = styled.div<{
  disabled: boolean;
  checked: boolean;
  intermediate?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({ intermediate, checked }) =>
    intermediate || checked ? 'transparent' : 'white'};

  &::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: alpha(opacity=0);
    opacity: 0;
    content: '';
    position: absolute;
    width: 11px;
    height: 4px;
    background: transparent;
    top: ${({ intermediate }) => `${intermediate ? 2 : 3}px`};
    left: ${({ intermediate }) => `${intermediate ? 0.8 : 1}px`};
    border: 2px solid #fcfff4;
    border-top: none;
    border-right: none;

    ${({ intermediate }) =>
      intermediate &&
      `border-left: none;
   
  `}

    ${({ checked, intermediate }) =>
      intermediate || checked
        ? `
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1;
  `
        : ''}

    -webkit-transform: rotate(
      ${({ intermediate }) => `${intermediate ? 0 : -45}deg`}
    );
    -moz-transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
    -o-transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
    -ms-transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
    transform: rotate(${({ intermediate }) => `${intermediate ? 0 : -45}deg`});
  }
`;

const CheckBox = styled.input<{ $disabled: boolean; $displayAsButton: boolean }>`
  visibility: ${({ $displayAsButton }) => ($displayAsButton ? 'hidden' : 'visible')};
  position: absolute;
  width: ${({ $displayAsButton }) => ($displayAsButton ? '0' : '20px')};
  height: ${({ $displayAsButton }) => ($displayAsButton ? '0' : '20px')};
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default Checkbox;
