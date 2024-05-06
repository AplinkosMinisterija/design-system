import { JSX } from 'react';
export * from '@/common/table/types';

export interface ButtonColors {
  background: string;
  text: string;
  border: string;
  hover?: string;
}
export interface FieldsColors {
  border?: string;
  text?: string;
  background?: string;
  error?: string;
  tag?: string;
  tagText?: string;
  icon?: string;
}
interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  transparent: string;
  danger: string;
  success: string;
  buttons: {
    // configure your own button variants
    primary: ButtonColors;
    [key: string]: ButtonColors;
  };
  fields?: FieldsColors; // for inputs
  text: {
    //use only for text elements
    primary: string; // for titles and headings
    [key: string]: string;
  };
  border: string;
  [key: string]: any;
}

export interface Theme {
  colors: ThemeColors;
  radius?: {
    fields: number;
    buttons: number;
    multiSelectFieldTag: number;
    [key: string]: any;
  };
  height?: {
    fields: number;
    buttons: number;
    [key: string]: any;
  };
  fontSize?: {
    fields: number;
    buttons: number;
    [key: string]: any;
  };
  [key: string]: any;
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

export interface AppRoute {
  component: JSX.Element;
  slug: string;
  loggedIn?: boolean;
  title?: string;
  back?: boolean;
  icon?: JSX.Element;
  description?: string;
}

export interface DefaultLayoutProps {
  loggedIn: boolean;
  menuRoutes: AppRoute[];
  onLogin: () => void;
  onLogout: () => void;
  onRouteSelected: (slug: string) => void;
  loginSlug: string;
  children: any;
  onGoHome: () => void;
  logo: JSX.Element;
  currentRoute?: AppRoute;
  onScroll?: () => void;
}

export type FileProps = {
  url: string;
  name: string;
  size: number;
  main?: boolean;
};

export type ServerErrors = {
  [responseErrorType: string]: string;
};

export type ValidationMessages = {
  error: string;
  [responseErrorMessage: string]: string;
};

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  TRANSPARENT = 'transparent',
}
