import { ChangeEventHandler } from 'react';
export interface SwitchProps {
    value?: boolean;
    name?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    label?: any;
    error?: boolean;
    className?: string;
    intermediate?: boolean;
}
declare const Switch: ({ value, name, onChange }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;
