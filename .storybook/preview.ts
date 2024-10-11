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

export const theme: Theme = {
  colors: {
    primary: '#53B1FD',
    secondary: '#13C9E7',
    tertiary: '#7A7E9F',
    transparent: 'transparent',
    danger: '#FE5B78',
    success: '#027A48',
    map: {
      primary: '#53B1FD',
      selected: '#a9d8fd',
      outline: '#d7eafa',
    },
    buttons: {
      [ButtonVariants.PRIMARY]: {
        background: '#53B1FD',
        text: 'white',
        border: 'transparent',
        hover: '#a9d8fd',
        checked: '#008bff',
      },
      [ButtonVariants.SECONDARY]: {
        background: 'white',
        text: '#525469',
        border: 'transparent',
        hover: '#53B1FD',
        hoverText: 'white',
        checked: '#a9d8fd',
      },
      [ButtonVariants.OUTLINE]: {
        background: 'transparent',
        text: '#7A7E9F',
        border: '#7A7E9F',
        hover: 'transparent',
        hoverText: '#525469',
        hoverBorder: '#525469',
        checked: '#a9d8fd',
        checkedBorder: '#53B1FD',
        checkedText: '#525469',
      },
      [ButtonVariants.TRANSPARENT]: {
        background: 'transparent',
        text: '#101010',
        border: 'transparent',
        hover: 'transparent',
        hoverText: '#53B1FD',
        checkedText: '#008bff',
      },
      [ButtonVariants.COLUMNS]: {
        background: 'white',
        text: '#101010',
        border: '#9aa4b2',
        hover: 'white',
        hoverBorder: '#626872',
        icon: '#9aa4b2',
        count: {
          text: 'white',
          background: '#53B1FD',
        },
        checkedText: '#53B1FD',
        checkedBorder: '#53B1FD',
      },
    },
    fields: {
      text: '#101010',
      label: '#101010',
      border: '#d4d5de',
      borderFocus: '#4656f6',
      background: 'white',
    },
    dropDown: {
      background: 'white',
      label: '#101010',
      hover: '',
    },
    profileSelector: {
      [ProfileSelectorVariants.PRIMARY]: {
        selector: {
          background: 'white',
          label: '#101010',
          description: '#00000099',
          icon: '#53B1FD',
        },
        options: {
          container: 'white',
          hover: '#53B1FD',
          text: '#101010',
          hoverText: 'white',
        },
      },
      [ProfileSelectorVariants.SECONDARY]: {
        selector: {
          background: '#437783',
          label: 'white',
          description: '#FFFFFF99',
          icon: 'white',
        },
      },
    },
    text: {
      primary: '#101010',
    },
    cardBackground: {
      primary: '#f7f7f7',
      success: '#eafbf6',
    },
    border: '#d4d5de',
    GREY: '#f7f7f7',
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
