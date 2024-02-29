import { FeatureCollection } from "../types";
declare const MapField: ({ mapHost, mapPath, value, onChange, ...rest }: {
    mapHost: string;
    mapPath: string;
    value: FeatureCollection;
    onChange: (value: FeatureCollection) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default MapField;
