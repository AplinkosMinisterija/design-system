import type { Preview } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Theme } from '../src/types';

export const theme: Theme = {
  colors: {
    primary: '#53B1FD',
    secondary: '#13C9E7',
    tertiary: '#7A7E9F',
    transparent: 'transparent',
    danger: '#FE5B78',
    success: '#027A48',
    buttons: {
      primary: {
        background: '#53B1FD',
        text: '#101010',
        border: 'transparent',
        hover: '#53B1FD',
      },
      secondary: {
        background: 'white',
        text: '#101010',
        border: 'transparent',
        hover: '#13C9E78F',
      },
      danger: {
        background: '#FE5B78',
        text: 'white',
        border: 'transparent',
        hover: '#FE5B78E6',
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
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  html {
    font-size: 62.5%;
    width: 100vw;
    color: ${theme.colors.text.primary};
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
    font-size: 1.6rem;
    overflow: hidden;
    justify-content: center;
  }
  h1 {
    font-size: 3.2rem;
    color: ${theme.colors.text.primary};
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      color: inherit;
    }
  }
  button {
    outline: none;
    text-decoration: none;
    display: block;
    border: none;
    background-color: transparent;
  }

  textarea {
    font-size: 1.6rem;
  }
  `;

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
