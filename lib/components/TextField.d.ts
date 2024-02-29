/// <reference types="react" />
export interface TextFieldProps {
    value?: string | number;
    name?: string;
    error?: string;
    showError?: boolean;
    label?: string;
    icon?: JSX.Element;
    className?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    padding?: string;
    onChange?: (option?: any) => void;
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
}
declare const TextField: ({ value, name, error, showError, readOnly, label, className, leftIcon, rightIcon, padding, onChange, subLabel, placeholder, bottomLabel, type, disabled, height, secondLabel, onInputClick, }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default TextField;
