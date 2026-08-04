import 'styled-components';
import { Theme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare global {
  namespace JSX {
    // React 19 compat: This shim extends JSX.Element to match React.ReactElement shape.
    // Scoped to this file; does not leak into consumers via published .d.ts.
    interface Element extends React.ReactElement<any, any> {}
  }
}

export {};
