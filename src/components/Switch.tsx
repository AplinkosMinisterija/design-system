import styled, { useTheme } from 'styled-components';

export interface SwitchProps {
  value?: boolean;
  name?: string;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  labelStyle?: any;
  labelPosition: 'left' | 'right';
  trackColorActive?: string;
  trackColorInactive?: string;
  thumbColor?: string;
}

const Switch = ({
  value,
  name,
  onChange,
  disabled,
  label,
  className,
  labelStyle,
  labelPosition = 'right',
  trackColorActive,
  trackColorInactive,
  thumbColor,
}: SwitchProps) => {
  const onSwitchClick = () => {
    if (!disabled) onChange(!value);
  };

  const renderLabel = () => (
    <Label style={labelStyle} onClick={onSwitchClick} $disabled={disabled}>
      {label}
    </Label>
  );

  return (
    <SwitchWrapper className={className} $disabled={disabled}>
      {label && labelPosition === 'left' && renderLabel()}
      <SwitchContainer $disabled={disabled}>
        <InputCheckbox
          $color={trackColorActive}
          type="checkbox"
          name={name}
          disabled={disabled}
          checked={value}
          onChange={onSwitchClick}
        />
        <Slider $color={trackColorInactive} $thumbColor={thumbColor} />
      </SwitchContainer>
      {label && labelPosition === 'right' && renderLabel()}
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
`;

const SwitchContainer = styled.label<{ $disabled: boolean }>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`;

const Label = styled.label<{ $disabled: boolean }>`
  user-select: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  font-weight: 500;
`;

const Slider = styled.span<{ $color?: string; $thumbColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $color }) => $color ?? '#ccc'};
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ $thumbColor }) => $thumbColor ?? 'white'};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const InputCheckbox = styled.input<{ $disabled: boolean; $color?: string }>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme, $color }) => $color ?? theme.colors.primary};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme, $color }) => $color ?? theme.colors.primary};
  }

  &:checked + ${Slider}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`;

export default Switch;
