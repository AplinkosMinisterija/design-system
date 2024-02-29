interface MainColorTypes {
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    danger: string;
    success: string;
    [key: string]: string;
}
interface ThemeColors {
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
export interface Theme<T> {
    colors: T & ThemeColors;
}
export type FeatureCollection = {
    type: 'FeatureCollection';
    features: Feature[];
};
type GenericObject = {
    [key: string]: any;
};
type Feature = {
    type: 'Feature';
    geometry: Geometry;
    properties?: GenericObject;
};
type Geometry = {
    type: string;
    coordinates: CoordinatesTypes;
};
type CoordinatesPoint = number[];
type CoordinatesMultiPoint = CoordinatesPoint[];
type CoordinatesLineString = CoordinatesPoint[];
type CoordinatesMultiLineString = CoordinatesLineString[];
type CoordinatesPolygon = CoordinatesLineString[];
type CoordinatesMultiPolygon = CoordinatesPolygon[];
type CoordinatesTypes = CoordinatesPoint | CoordinatesLineString | CoordinatesPolygon | CoordinatesMultiPoint | CoordinatesMultiLineString | CoordinatesMultiPolygon;
export {};
