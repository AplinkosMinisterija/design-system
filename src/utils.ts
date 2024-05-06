import { useCallback, useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { theme } from '../.storybook/preview';
import {AppRoute} from "./types";

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 868px)`,
  desktop: `(min-width: 869px)`,
};

export const useWindowSize = (width: string) => {
  const [isInRange, setIsInRange] = useState(false);

  const handleResize = useCallback(() => {
    const mediaQuery = window.matchMedia(width);
    setIsInRange(mediaQuery.matches);
  }, [width]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isInRange;
};

export const useGetCurrentRoute = (routes: AppRoute[]) => {
  const currentLocation = useLocation();
  return routes?.find(
    (route: any) => !!matchPath({ path: route.slug, end: true }, currentLocation.pathname),
  );
};

export const filterRoutes = (routes: AppRoute[], loggedIn: boolean) => {
  return routes.filter((route) => {
    if (!route?.slug) return false;
    if (Object.prototype.hasOwnProperty.call(route, 'loggedIn')) {
      return route.loggedIn === loggedIn;
    }
    return true;
  });
};

export const filterMenuRoutes = (routes: AppRoute[], loggedIn: boolean) => {
  return routes.filter((route) => {
    if (!route?.slug) return false;
    if (!route?.icon) return false;
    if (Object.prototype.hasOwnProperty.call(route, 'loggedIn')) {
      return route.loggedIn === loggedIn;
    }
    return true;
  });
};

export const svgToUrl = (icon: string) => {
  const base64SVG = window.btoa(icon);
  return `data:image/svg+xml;base64,${base64SVG}`;
};

export const GlobalStyles = createGlobalStyle`
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
    background-color: aliceblue;
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
  #storybook_root {
    height: 100vh;
  }
  `;



export function useStorage<T>(
  key: string,
  initialValue: T,
  persistent: boolean = true,
): {
  value: T;
  setValue: (params: any) => void;
  resetValue: () => void;
} {
  const storage = localStorage;

  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue, storage]);

  useEffect(() => {
    if (!persistent) {
      setStoredValue(initialValue);
    }
  }, []);

  const setValue = (value) => {
    if (typeof storedValue === 'object') {
      return setStoredValue({ ...storedValue, ...value });
    }
    setStoredValue(value);
  };

  const resetValue = () => {
    setStoredValue(initialValue);
  };

  return { value: storedValue, setValue, resetValue };
}
