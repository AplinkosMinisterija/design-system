import 'styled-components';
import { Theme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}

export {};
