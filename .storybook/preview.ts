import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles, Theme } from '../src';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  OUTLINE = 'outline',
  TRANSPARENT = 'transparent',
  COLUMNS = 'columns',
}

export enum ProfileSelectorVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const colors = {
  blue: '#53B1FD',
  lightBlue: '#a9d8fd',
  lighterBlue: '#d7eafa',
  turquoise: '#13C9E7',
  lightTurquoise: '#b5f3fd',
  lightTerurquoise: '#e1fbff',
  steelBlue: '#7A7E9F',
  lightSteelBlue: '#9093a5',
  lighterSteelBlue: '#b5b5b6',
  danger: '#FE5B78',
  success: '#027A48',
  black: '#101010',
  darkGrey: '#525469',
  grey: '#626872',
  lightGrey: '#d4d5de',
};

export const theme: Theme = {
  colors: {
    ...colors,
    primary: colors.blue,
    primaryLight: colors.lightBlue,
    primaryLighter: colors.lighterBlue,
    secondary: colors.turquoise,
    tertiary: colors.steelBlue,
    transparent: 'transparent',
    map: {
      primary: colors.blue,
      selected: colors.lightBlue,
      outline: colors.lighterBlue,
    },
    buttons: {
      [ButtonVariants.PRIMARY]: {
        background: colors.blue,
        text: 'white',
        border: 'transparent',
        hover: colors.lightBlue,
        checked: colors.blue,
      },
      [ButtonVariants.SECONDARY]: {
        background: 'white',
        text: colors.darkGrey,
        border: 'transparent',
        hover: colors.blue,
        hoverText: 'white',
        checked: colors.lightBlue,
      },
      [ButtonVariants.OUTLINE]: {
        background: 'transparent',
        text: colors.steelBlue,
        border: colors.steelBlue,
        hover: 'transparent',
        hoverText: colors.darkGrey,
        hoverBorder: colors.darkGrey,
        checked: colors.lighterBlue,
        checkedBorder: colors.blue,
        checkedText: colors.darkGrey,
      },
      [ButtonVariants.TRANSPARENT]: {
        background: 'transparent',
        text: colors.black,
        border: 'transparent',
        hover: 'transparent',
        hoverText: colors.blue,
        checkedText: colors.blue,
      },
      [ButtonVariants.COLUMNS]: {
        background: 'white',
        text: colors.black,
        border: colors.lightSteelBlue,
        hover: 'white',
        hoverBorder: colors.grey,
        icon: colors.lighterBlue,
        count: {
          text: 'white',
          background: colors.blue,
        },
        checkedText: colors.blue,
        checkedBorder: colors.blue,
      },
    },
    fields: {
      text: colors.black,
      label: colors.black,
      border: colors.lightGrey,
      borderFocus: colors.blue,
      background: 'white',
    },
    dropDown: {
      background: 'white',
      label: colors.black,
      hover: '',
    },
    profileSelector: {
      [ProfileSelectorVariants.PRIMARY]: {
        selector: {
          background: 'white',
          label: colors.black,
          description: colors.grey,
          icon: colors.blue,
        },
        options: {
          container: 'white',
          hover: colors.blue,
          text: colors.black,
          hoverText: 'white',
        },
      },
      [ProfileSelectorVariants.SECONDARY]: {
        selector: {
          background: colors.blue,
          label: 'white',
          description: colors.lighterBlue,
          icon: 'white',
        },
      },
    },
    text: {
      primary: colors.black,
    },
    cardBackground: {
      primary: '#f7f7f7',
      success: '#eafbf6',
    },
    border: colors.lightGrey,
    GREY: colors.lightGrey,
  },
  radius: {
    buttons: 0.4,
    fields: 0.4,
    multiSelectFieldTag: 0.4,
    checkBoxButton: 0.4,
    profileSelector: 0.8,
    popup: 1,
  },
  height: {
    fields: 5.6,
  },
  padding: {
    buttons: '2rem 2rem',
    mobilePopup: '1rem',
    buttonMultiSelect: 1.6,
  },
  fontSize: {
    buttons: 1.6,
    fields: 1.6,
    fieldLabels: 1.6,
    profileSelector: 1.6,
  },
  fontWeight: {
    fields: 400,
    fieldLabels: 400,
    buttons: 400,
  },
  gap: {
    buttonMultiSelect: 1.2,
  },
};

const GlobalStyles = createGlobalStyle`${globalStyles(theme)}`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      /* Uncomment for theme switching support */
      themes: {
        light: theme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
