export interface CheckboxProps {
    value?: boolean;
    name?: string;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    label?: any;
    error?: boolean;
    className?: string;
    intermediate?: boolean;
}
declare const Checkbox: ({ value, name, onChange, disabled, label, error, className, intermediate, }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
