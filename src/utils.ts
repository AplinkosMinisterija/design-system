import { format } from 'date-fns/format';
import { useCallback, useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router';
import { AppRoute, FilterConfig } from './types';
import _ = require('lodash');

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 868px)`,
  desktop: `(min-width: 869px)`,
};

export const intersectionObserverConfig = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export enum FilterInputTypes {
  text = 'text',
  date = 'date',
  multiselect = 'multiselect',
  singleSelect = 'singleselect',
  asyncSingleSelect = 'asyncSingleSelect',
  asyncMultiSelect = 'asyncMultiSelect',
  checkbox = 'checkbox',
}

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

export const globalStyles = (theme) => `
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
  setValue: (newValue: T) => void;
  resetValue: () => void;
} {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    if (!persistent) {
      setStoredValue(initialValue);
    }
  }, []);

  useEffect(() => {
    const val = localStorage.getItem(key);
    setStoredValue(val ? JSON.parse(val) : initialValue);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(JSON.parse(event.newValue as string));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);
  const updateStorage = (newValue: T) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    window.dispatchEvent(
      new StorageEvent('storage', {
        key,
        newValue: JSON.stringify(newValue),
      }),
    );
  };

  const setValue = (newValue: T) => {
    updateStorage(newValue);
  };

  const resetValue = () => {
    updateStorage(initialValue);
  };

  return { value: storedValue, setValue, resetValue };
}

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnline = useCallback(() => {
    setIsOnline(true);
  }, []);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
  }, []);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOffline, handleOnline]);

  return isOnline;
};

export const formatDate = (date?: Date | string) =>
  date ? format(new Date(date), 'yyyy-MM-dd') : '-';

export const handleDateRestriction = (filter: FilterConfig, values: any) => {
  const key = filter.key;
  const includesFrom = key.includes('From');
  const includesTo = key.includes('To');
  const dateTo = key.replace(/From$/, 'To');
  const dateFrom = key.replace(/To$/, 'From');
  return {
    ...(includesFrom &&
      values[dateTo] && {
        maxDate: new Date(values[dateTo]),
      }),
    ...(includesTo &&
      values[dateFrom] && {
        minDate: new Date(values[dateFrom]),
      }),
  };
};

export const phoneNumberRegexPattern = new RegExp(`^(\\+370|8|0)(3|4|5|6|7|8|9)\\d{7}$`);

export const b64decode = (str: string): ArrayBuffer => {
  const binary_string = window.atob(str);
  const len = binary_string.length;
  const bytes = new Uint8Array(new ArrayBuffer(len));
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
};

export const compressJSON = async (data: any) => {
  const stream = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  }).stream();

  const compressedReadableStream = stream.pipeThrough(new CompressionStream('gzip'));
  const compressedResponse = new Response(compressedReadableStream);
  // Get response Blob
  const blob = await compressedResponse.blob();
  // Get the ArrayBuffer
  const buffer = await blob.arrayBuffer();

  // convert ArrayBuffer to base64 encoded string
  const compressedBase64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return compressedBase64;
};

export const decompressJSON = async (compressedBase64) => {
  const stream = new Blob([b64decode(compressedBase64)], {
    type: 'application/json',
  }).stream();

  const compressedReadableStream = stream.pipeThrough(new DecompressionStream('gzip'));
  const resp = new Response(compressedReadableStream);
  const blob = await resp.blob();
  const data = JSON.parse(await blob.text());
  return data;
};

export const cleanObj = (el) => {
  const internalClean = (el) => {
    return _.transform(el, (result: any, value, key) => {
      const isCollection = _.isObject(value);
      const cleaned = isCollection ? internalClean(value) : value;

      if (isCollection && _.isEmpty(cleaned)) {
        return;
      }

      _.isArray(result) ? result.push(cleaned) : (result[key] = cleaned);
    });
  };

  return _.isObject(el) ? internalClean(el) : el;
};
