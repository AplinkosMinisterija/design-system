/// <reference types="react" />
export interface TextFieldProps {
    value?: string | number;
    name?: string;
    error?: string;
    showError?: boolean;
    label?: string;
    className?: string;
    padding?: string;
    onChange?: (option?: any) => void;
    bottomLabel?: string;
    disabled?: boolean;
    height?: number;
    onInputClick?: () => void;
    secondLabel?: JSX.Element;
    placeholder?: string;
}
declare const PasswordField: ({ value, secondLabel, name, error, showError, label, className, padding, onChange, placeholder, disabled, height, onInputClick, }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default PasswordField;
