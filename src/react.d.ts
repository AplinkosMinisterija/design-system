declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface IntrinsicAttributes {
      [elemName: string]: any;
    }
    interface Element extends React.ReactElement<any, any> {}
    type ElementType = React.ElementType;
  }
}

export {};
