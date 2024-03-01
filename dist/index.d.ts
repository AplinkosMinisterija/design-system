import { ChangeEventHandler } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { default as React_2 } from 'react';

export declare const Button: {
    ({ variant, route, children, height, padding, leftIcon, radius, buttonPadding, rightIcon, color, type, loading, className, disabled, fontWeight, ...rest }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>): JSX_2.Element;
    colors: typeof ButtonColors;
};

declare enum ButtonColors {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    DANGER = "danger",
    SUCCESS = "success",
    TRANSPARENT = "transparent"
}

declare interface ButtonProps {
    variant?: ButtonColors;
    route?: string;
    children?: JSX_2.Element | string;
    leftIcon?: JSX_2.Element | string;
    rightIcon?: JSX_2.Element | string;
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

export declare const CheckBox: ({ value, name, onChange, disabled, label, error, className, intermediate, }: CheckboxProps) => JSX_2.Element;

declare interface CheckboxProps {
    value?: boolean;
    name?: string;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    label?: any;
    error?: boolean;
    className?: string;
    intermediate?: boolean;
}

export declare const ContentLayout: ({ children, title, customSubTitle, customTitle, currentRoute }: any) => JSX_2.Element;

declare type CoordinatesLineString = CoordinatesPoint[];

declare type CoordinatesMultiLineString = CoordinatesLineString[];

declare type CoordinatesMultiPoint = CoordinatesPoint[];

declare type CoordinatesMultiPolygon = CoordinatesPolygon[];

declare type CoordinatesPoint = number[];

declare type CoordinatesPolygon = CoordinatesLineString[];

declare type CoordinatesTypes = CoordinatesPoint | CoordinatesLineString | CoordinatesPolygon | CoordinatesMultiPoint | CoordinatesMultiLineString | CoordinatesMultiPolygon;

export declare const DefaultLayout: ({ children, onScroll, loggedIn, currentRoute, routes, logo }: any) => JSX_2.Element;

declare type Feature = {
    type: 'Feature';
    geometry: Geometry;
    properties?: GenericObject;
};

export declare type FeatureCollection = {
    type: 'FeatureCollection';
    features: Feature[];
};

export declare const FieldWrapper: ({ error, showError, label, className, padding, onClick, handleBlur, subLabel, bottomLabel, secondLabel, children, }: FieldWrapperProps) => JSX_2.Element;

declare interface FieldWrapperProps {
    error?: string;
    showError?: boolean;
    label?: string;
    className?: string;
    padding?: string;
    onClick?: () => void;
    handleBlur?: (event: any) => void;
    bottomLabel?: string;
    subLabel?: string;
    secondLabel?: JSX_2.Element;
    children: any;
}

declare type GenericObject = {
    [key: string]: any;
};

declare type Geometry = {
    type: string;
    coordinates: CoordinatesTypes;
};

declare interface MainColorTypes {
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    danger: string;
    success: string;
    [key: string]: string;
}

export declare const MapField: ({ mapHost, mapPath, value, onChange, ...rest }: {
    mapHost: string;
    mapPath: string;
    value: FeatureCollection;
    onChange: (value: FeatureCollection) => void;
}) => JSX_2.Element;

export declare const Modal: ({ visible, children, onClose }: ModalProps) => JSX_2.Element;

declare interface ModalProps {
    visible: boolean;
    onClose?: () => void;
    children?: React_2.ReactNode;
}

export declare const PasswordField: ({ value, secondLabel, name, error, showError, label, className, padding, onChange, placeholder, disabled, height, onInputClick, }: TextFieldProps_2) => JSX_2.Element;

export declare const Switch: ({ value, name, onChange }: SwitchProps) => JSX_2.Element;

declare interface SwitchButtonProps {
    options: any[];
    onChange: (value: any) => void;
    value: any;
    className?: string;
}

declare interface SwitchProps {
    value?: boolean;
    name?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    label?: any;
    error?: boolean;
    className?: string;
    intermediate?: boolean;
}

export declare const Tabs: ({ options, onChange, value, className }: SwitchButtonProps) => JSX_2.Element;

export declare const TextField: ({ value, name, error, showError, readOnly, label, className, leftIcon, rightIcon, padding, onChange, subLabel, placeholder, bottomLabel, type, disabled, height, secondLabel, onInputClick, }: TextFieldProps) => JSX_2.Element;

declare interface TextFieldProps {
    value?: string | number;
    name?: string;
    error?: string;
    showError?: boolean;
    label?: string;
    icon?: JSX_2.Element;
    className?: string;
    leftIcon?: JSX_2.Element;
    rightIcon?: JSX_2.Element;
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
    secondLabel?: JSX_2.Element;
    selectedValue?: boolean;
}

declare interface TextFieldProps_2 {
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
    secondLabel?: JSX_2.Element;
    placeholder?: string;
}

export declare interface Theme<T> {
    colors: T & ThemeColors;
}

declare interface ThemeColors {
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    danger: string;
    success: string;
    buttonBackground: MainColorTypes;
    buttonText: MainColorTypes;
    hover: MainColorTypes;
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        label: string;
        error: string;
        [key: string]: string;
    };
    cardBackground: {
        primary: string;
        success: string;
    };
    border: string;
    [key: string]: string | {
        [key: string]: string;
    };
}

export { }
