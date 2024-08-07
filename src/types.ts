import { JSX } from 'react';
import { FilterInputTypes } from './utils';
export * from './components/tables/components/types';

export interface ButtonColors {
  background: string;
  text: string;
  border: string;
  hover?: string;
  hoverText?: string;
  icon?: string;
  count?: {
    background: string;
    text: string;
  };
  [key: string]: any;
}
export interface FieldsColors {
  border?: string;
  borderFocus?: string;
  text?: string;
  background?: string;
  error?: string;
  tag?: string;
  tagText?: string;
  icon?: string;
  label?: string;
  [key: string]: any;
}

export interface ThemeMapColors {
  primary: string;
  selected?: string;
  outline?: string;
  fill?: string;
  [key: string]: any;
}

export interface DropDownColors {
  background?: string;
  label?: string;
  hover?: string;
  [key: string]: any;
}

export interface ProfileSelectorColors {
  selector?: {
    background?: string;
    label?: string;
    description?: string;
    icon?: string;
    [key: string]: any;
  };
  options?: {
    container?: string;
    hover?: string;
    text?: string;
    hoverText?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  transparent: string;
  danger: string;
  success: string;
  map?: ThemeMapColors;
  buttons?: {
    // configure your own button variants
    primary: ButtonColors;
    [key: string]: ButtonColors;
  };
  fields?: FieldsColors; // for inputs
  dropDown?: DropDownColors;
  profileSelector?: ProfileSelectorColors;
  text?: {
    //use only for text elements
    primary: string; // for titles and headings
    [key: string]: string;
  };
  border?: string;
  link?: string;
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
    fields?: number;
    [key: string]: any;
  };
  padding?: {
    buttons?: string;
  };
  fontSize?: {
    fields: number;
    fieldLabels?: number;
    buttons?: number;
    [key: string]: any;
  };
  fontWeight?: {
    fields?: number;
    fieldLabels?: number;
    buttons?: number;
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

export type ChildrenType = string | JSX.Element | JSX.Element[];

export interface FilterConfig {
  label: string;
  key: string;
  handleGetNextPageParam?: (params: any) => number;
  optionLabel?: (value: any) => string;
  inputType: FilterInputTypes;
  options?: any[];
  customSetValue?: (setFieldValue: () => void, input: string) => void;
  getDependId?: (values: any) => string;
  optionsApi?: (input: string, page: number) => Promise<any>;
  refreshOptions?: (input?: string, page?: number) => any;
  getOptionValue?: (value: any) => string;
  default?: any;
}

export type RowConfig = string[][];

export enum PopupType {
  FULL_SCREEN = 'FULL_SCREEN',
  CENTER = 'CENTER',
  BOTTOM = 'BOTTOM',
}

// Hunting & QR CODE types

export enum HuntingStatusTypes {
  CREATED = 'CREATED',
  READY = 'READY',
  STARTED = 'STARTED',
  ENDED = 'ENDED',
}
export enum AnimalFormType {
  Wolf = 'WOLF',
  Horned = 'HORNED',
  Extended = 'EXTENDED',
  Simple = 'SIMPLE',
  Other = 'OTHER',
}
export enum AnimalAge {
  ADULT = 'ADULT',
  TWO_YEAR = 'TWO_YEAR',
  ONE_YEAR = 'ONE_YEAR',
}
export enum HuntingTypes {
  VAROMOJI = 'VAROMOJI',
  TYKOJAMOJI = 'TYKOJAMOJI',
  SU_VELIAVELEMIS = 'SU_VELIAVELEMIS',
}
export enum AnimalGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
export enum AnimalCategory {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  JUNIOR = 'JUNIOR',
}
export enum Violation {
  LIMIT = 'LIMIT',
  PERIOD = 'PERIOD',
  OTHER_ANIMAL = 'OTHER_ANIMAL',
  CAR_ACCIDENT = 'CAR_ACCIDENT',
  SICK_OR_HURT = 'SICK_OR_HURT',
}
export enum LootCaseType {
  standard = 'STANDARD',
  car_accident = 'CAR_ACCIDENT',
  sick_or_hurt = 'SICK_OR_HURT',
}
export enum HuntingMemberAcceptMethod {
  IVR = 'IVR',
  APP = 'APP',
  SIGNATURE = 'SIGNATURE',
}
export enum AppTypes {
  MOBILE = 'MOBILE',
  IVR = 'IVR',
  ADMIN = 'ADMIN',
}

export interface QRHuntingMember {
  fullName: string;
  email: string;
  ticketNumber: string;
  phone: string;
  acceptMethod?: HuntingMemberAcceptMethod;
  acceptedAt?: string;
  createdBy?: string;
  joinedAt?: string;
  leftAt?: string;
  isGuest?: boolean;
}

export interface LootAttributes {
  horns?: { left?: number; right?: number };
  hasDefects?: boolean;
  isPackMember?: boolean;
  hasScabies?: boolean;
  appearanceNotes?: string;
  wolfHuntingType?: HuntingTypes;
  packData?: {
    adults?: number;
    amount?: number;
    juniors?: number;
  };
  age?: number;
  category?: string;
  other?: { name?: string };
  comments?: { text: string; createdAt: Date | string }[];
  coordinates?: any;
  lootCase?: LootCaseType;
}

export interface QRHuntingLoot {
  id: string | number;
  animal: {
    id: string | number;
    name: string;
  };
  amount: number;
  huntingMember: QRHuntingMember;
  violations?: Violation[];
  attributes?: LootAttributes;
  app?: AppTypes;
  registeredAt: string; // by phone
  createdAt: string; // by server
}

export interface QRHunting {
  id: number;
  violation?: boolean;
  membersCount: number;
  lootsCount: number;
  startDate: string;
  endDate: string;
  status: HuntingStatusTypes;
  huntingArea: string;
  manager: QRHuntingMember;
}

export interface QRCodeData {
  generatedAt: string;
  hunting: QRHunting;
  checkedMember?: QRHuntingMember;
  huntingLoots: QRHuntingLoot[];
}
