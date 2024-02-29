/// <reference types="react" />
export interface FieldWrapperProps {
    error?: string;
    showError?: boolean;
    label?: string;
    className?: string;
    padding?: string;
    onClick?: () => void;
    handleBlur?: (event: any) => void;
    bottomLabel?: string;
    subLabel?: string;
    secondLabel?: JSX.Element;
    children: any;
}
declare const FieldWrapper: ({ error, showError, label, className, padding, onClick, handleBlur, subLabel, bottomLabel, secondLabel, children, }: FieldWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default FieldWrapper;
