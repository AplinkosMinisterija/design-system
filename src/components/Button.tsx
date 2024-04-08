import { JSX } from 'react';
import styled from 'styled-components';
import Loader from '../common/Loader';

export interface ButtonProps {
  variant?: string;
  route?: string;
  children?: JSX.Element | string;
  leftIcon?: JSX.Element | string;
  rightIcon?: JSX.Element | string;
  type?: string;
  loading?: boolean;
  signature?: boolean;
  disabled?: boolean;
}

const Button = ({
  variant = 'primary',
  route,
  children,
  leftIcon,
  rightIcon,
  type,
  loading = false,
  className,
  disabled = false,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {leftIcon}
      {loading ? <Loader color="white" /> : children}
      {rightIcon}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $variant: string;
  $height: number;
  $padding?: string;
  $fontWeight?: string;
  $radius?: string;
}>`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  align-items: center;
  height: ${({ theme }) => theme.height.buttons}rem;
  border-radius: ${({ theme }) => theme.radius.buttons}rem;
  padding: 1.1rem 2rem;
  background-color: ${({ $variant, theme }) => theme.colors.buttons[$variant].background};
  color: ${({ $variant, theme }) => theme.colors.buttonText[$variant]};
  border: ${({ $variant, theme }) => theme.colors.buttons[$variant].border};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  font-size: ${({ theme }) => theme.fontSize.buttons}rem;
  :hover {
    background-color: ${({ $variant, theme }) => theme.colors.buttons[$variant].hover};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: 100%;
`;

export default Button;
