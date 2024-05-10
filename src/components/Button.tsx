import { JSX } from 'react';
import styled from 'styled-components';
import Loader from './common/Loader';

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
}>`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: ${({ theme }) => theme.height?.buttons || 4}rem;
  border-radius: ${({ theme }) => theme.radius?.buttons || 0.4}rem;
  padding: 1.1rem 2rem;
  background-color: ${({ $variant, theme }) =>
    theme.colors.buttons[$variant]?.background || '#53B1FD'};
  color: ${({ $variant, theme }) => theme.colors.buttons[$variant]?.text || 'white'};
  border: 1px solid
    ${({ $variant, theme }) => theme.colors.buttons[$variant]?.border || 'transparent'};
  font-weight: ${({ theme }) => theme.fontWeight.buttons || 400};
  font-size: ${({ theme }) => theme.fontSize.buttons || 1.6}rem;
  &:hover {
    color: ${({ $variant, theme }) =>
      theme.colors.buttons[$variant]?.hoverText || theme.colors.buttons[$variant]?.text || 'white'};
    background-color: ${({ $variant, theme }) =>
      theme.colors.buttons[$variant]?.hover || '#a9d8fd'};
    border: 1px solid
      ${({ $variant, theme }) =>
        theme.colors.buttons[$variant]?.hoverBorder ||
        theme.colors.buttons[$variant]?.border ||
        'transparent'};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: 100%;
`;

export default Button;
