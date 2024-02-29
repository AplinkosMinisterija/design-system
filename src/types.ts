interface MainColorTypes {
  primary: string;
  secondary: string;
  tertiary: string;
  transparent: string;
  danger: string;
  success: string;
  [key: string] : string;
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
    text: { //use only for text elements
      primary: string;// for titles and headings
      secondary: string;// for paragraphs and other regular texts
      tertiary: string; // for less important explanatory texts
      label: string; // for input label
      error: string; // for error
      [key: string] : string;
    };
    cardBackground: { primary: string; success: string };
    border: string; // for input and other bordered elements
    [key: string] : string | {[key: string] : string};
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

type CoordinatesTypes =
    | CoordinatesPoint
    | CoordinatesLineString
    | CoordinatesPolygon
    | CoordinatesMultiPoint
    | CoordinatesMultiLineString
    | CoordinatesMultiPolygon;




