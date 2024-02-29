declare enum IconName {
    visibleOn = "visibleOn",
    visibleOff = "visibleOff"
}
export interface IconProps {
    name: IconName | string;
    className?: string;
}
declare const Icon: ({ name, className }: IconProps) => import("react/jsx-runtime").JSX.Element | null;
export default Icon;
