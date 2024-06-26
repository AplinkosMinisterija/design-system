import type { Preview } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ButtonVariants, Theme, globalStyles } from '../src';

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
      outline: '#d7eafa'
    },
    buttons: {
      [ButtonVariants.PRIMARY]: {
        background: '#53B1FD',
        text: 'white',
        border: 'transparent',
        hover: '#a9d8fd',
      },
      [ButtonVariants.SECONDARY]: {
        background: 'white',
        text: '#525469',
        border: 'transparent',
        hover: '#53B1FD',
        hoverText: 'white',
      },
      [ButtonVariants.OUTLINE]: {
        background: 'transparent',
        text: '#7A7E9F',
        border: '#7A7E9F',
        hover: 'transparent',
        hoverText: '#525469',
        hoverBorder: '#525469',
      },
      [ButtonVariants.TRANSPARENT]: {
        background: 'transparent',
        text: '#101010',
        border: 'transparent',
        hover: 'transparent',
        hoverText: '#53B1FD',
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
      },
    },
    fields: {
      text: '#101010',
      label: '#101010',
      border: '#d4d5de',
      borderFocus: '#4656f6',
      background: 'white',
    },
    buttonBackground: {
      primary: '#53B1FD',
      secondary: 'white',
      tertiary: '#7A7E9F',
      success: '#027A48',
      danger: '#FE5B78',
      transparent: 'transparent',
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
  },
  height: {
    buttons: 4,
    fields: 5.6,
  },
  fontSize: {
    buttons: 1.6,
    fields: 1.6,
    fieldLabels: 1.6,
  },
  fontWeight: {
    fields: 400,
    fieldLabels: 400,
    buttons: 400,
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
