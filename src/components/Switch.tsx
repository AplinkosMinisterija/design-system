import styled from 'styled-components';

export interface SwitchProps {
  value?: boolean;
  name?: string;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  labelStyle?: React.CSSProperties;
  labelPosition?: 'left' | 'right';
  trackColorActive?: string;
  trackColorInactive?: string;
  thumbColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZE_MAP = {
  sm: { height: 18, width: 32, thumb: 12, translate: 14 },
  md: { height: 24, width: 44, thumb: 18, translate: 20 },
  lg: { height: 32, width: 60, thumb: 24, translate: 28 },
  xl: { height: 40, width: 76, thumb: 32, translate: 36 },
} as const;

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
  size = 'md',
}: SwitchProps) => {
  const onSwitchClick = () => {
    if (!disabled) onChange(!value);
  };

  const renderLabel = () => (
    <Label style={labelStyle} onClick={onSwitchClick} $disabled={!!disabled}>
      {label}
    </Label>
  );

  const sz = SIZE_MAP[size];
  return (
    <SwitchWrapper className={className} $disabled={!!disabled}>
      {label && labelPosition === 'left' && renderLabel()}
      <SwitchContainer
        $disabled={!!disabled}
        $height={sz.height}
        $width={sz.width}
        $thumb={sz.thumb}
        $translate={sz.translate}
      >
        <InputCheckbox
          $color={trackColorActive}
          type="checkbox"
          name={name}
          disabled={disabled}
          checked={!!value}
          onChange={onSwitchClick}
          aria-checked={!!value}
          aria-label={label}
        />
        <Slider
          $color={trackColorInactive}
          $thumbColor={thumbColor}
          $height={sz.height}
          $thumb={sz.thumb}
        />
      </SwitchContainer>
      {label && labelPosition === 'right' && renderLabel()}
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  opacity: ${({ $disabled }) => ($disabled ? 0.48 : 1)};
`;

const SwitchContainer = styled.label<{
  $disabled: boolean;
  $height: number;
  $width: number;
  $thumb: number;
  $translate: number;
}>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  display: inline-block;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  min-width: ${({ $width }) => $width}px;
  min-height: ${({ $height }) => $height}px;

  input:checked + span:before {
    transform: translateX(${({ $translate }) => $translate}px);
  }
`;

const Label = styled.label<{ $disabled: boolean }>`
  user-select: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
  font-weight: 500;
`;

const Slider = styled.span<{
  $color?: string;
  $thumbColor?: string;
  $height: number;
  $thumb: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $color }) => $color ?? '#ccc'};
  transition: 0.4s;
  border-radius: 999px;

  &:before {
    position: absolute;
    content: '';
    height: ${({ $thumb }) => $thumb}px;
    width: ${({ $thumb }) => $thumb}px;
    left: ${({ $height, $thumb }) => Math.round(($height - $thumb) / 2)}px;
    bottom: ${({ $height, $thumb }) => Math.round(($height - $thumb) / 2)}px;
    background-color: ${({ $thumbColor }) => $thumbColor ?? 'white'};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const InputCheckbox = styled.input<{ $disabled?: boolean; $color?: string }>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme, $color }) => $color ?? theme.colors.primary};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme, $color }) => $color ?? theme.colors.primary};
  }
`;

export default Switch;