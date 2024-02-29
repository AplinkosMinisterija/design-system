/// <reference types="react" />
export interface TextFieldProps {
    value?: string | number;
    name?: string;
    error?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onChange?: (option?: any) => void;
    disabled?: boolean;
    height?: number;
    readOnly?: boolean;
    onInputClick?: () => void;
    placeholder?: string;
    type?: string;
    inputMode?: any;
    selectedValue?: boolean;
    onFocus?: any;
}
declare const TextFieldInput: ({ value, name, error, readOnly, leftIcon, rightIcon, onChange, placeholder, type, disabled, height, selectedValue, onInputClick, inputMode, onFocus, ...rest }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default TextFieldInput;
