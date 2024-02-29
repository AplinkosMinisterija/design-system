import { JSX } from 'react';
declare enum ButtonColors {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    DANGER = "danger",
    SUCCESS = "success",
    TRANSPARENT = "transparent"
}
export interface ButtonProps {
    variant?: ButtonColors;
    route?: string;
    children?: JSX.Element | string;
    leftIcon?: JSX.Element | string;
    rightIcon?: JSX.Element | string;
    height?: number;
    type?: string;
    loading?: boolean;
    padding?: string;
    buttonPadding?: string;
    signature?: boolean;
    disabled?: boolean;
    color?: string;
    fontWeight?: string;
    radius?: string;
}
declare const Button: {
    ({ variant, route, children, height, padding, leftIcon, radius, buttonPadding, rightIcon, color, type, loading, className, disabled, fontWeight, ...rest }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
    colors: typeof ButtonColors;
};
export default Button;
