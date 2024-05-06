import type { Preview } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ButtonVariants, Theme } from '../src';
import { globalStyles } from '../src/utils';

export const theme: Theme = {
  colors: {
    primary: '#53B1FD',
    secondary: '#13C9E7',
    tertiary: '#7A7E9F',
    transparent: 'transparent',
    danger: '#FE5B78',
    success: '#027A48',
    buttons: {
      [ButtonVariants.PRIMARY]: {
        background: '#53B1FD',
        text: '#101010',
        border: 'transparent',
        hover: '#0061b0',
      },
      [ButtonVariants.SECONDARY]: {
        background: 'white',
        text: '#101010',
        border: 'transparent',
        hover: '#13C9E78F',
      },
      [ButtonVariants.TERTIARY]: {
        background: '#7A7E9F',
        text: 'white',
        border: 'transparent',
        hover: '#6f759f',
      },
      [ButtonVariants.DANGER]: {
        background: '#FE5B78',
        text: 'white',
        border: 'transparent',
        hover: 'rgba(252,60,90,0.9)',
      },
      [ButtonVariants.SUCCESS]: {
        background: '#027A48',
        text: 'white',
        border: 'transparent',
        hover: '#00a862',
      },
      [ButtonVariants.TRANSPARENT]: {
        background: 'transparent',
        text: '#101010',
        border: 'transparent',
        hover: 'transparent',
      },
    },
    buttonBackground: {
      primary: '#53B1FD',
      secondary: 'white',
      tertiary: '#7A7E9F',
      success: '#027A48',
      danger: '#FE5B78',
      transparent: 'transparent',
    },
    buttonText: {
      primary: '#101010',
      secondary: '#101010',
      tertiary: 'white',
      danger: 'white',
      success: 'white',
      transparent: '#101010',
    },
    hover: {
      primary: '#53B1FD',
      secondary: '#13C9E78F',
      tertiary: '#7A7E9F',
      danger: '#FE5B78E6',
      success: '#ECFDF3',
      transparent: '#F3F3F7',
    },
    text: {
      primary: '#101010',
      secondary: '#525252',
      tertiary: '#4B5565',
      label: '#697586',
      error: '#FE5B78',
    },
    cardBackground: {
      primary: '#f7f7f7',
      success: '#eafbf6',
    },
    border: '#d4d5de',
    input: '#FFFFFF',
    shadow: '#121a5529',
    GREY: '#f7f7f7',
  },
  radius: {
    buttons: 2.6,
    fields: 0.8,
    multiSelectFieldTag: 0.4,
  },
  height: {
    buttons: 5.6,
    fields: 5.6,
  },
  fontSize: {
    buttons: 1.6,
    fields: 1.6,
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
