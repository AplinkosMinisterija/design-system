export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    danger: string;
    success: string;
    hover: {
      primary: string;
      secondary: string;
      tertiary: string;
      transparent: string;
      danger: string;
      success: string;
      [key: string] : string;
    };
    text: { //use only for text elements
      primary: string;// for titles and headings
      secondary: string;// for paragraphs and other regular texts
      tertiary: string; // for less important explanatory texts
      label: string; // for input label
      error: string; // for error
      [key: string] : string;
    };
    border: string; // for input and other bordered elements
    [key: string] : string | {[key: string] : string};
  };
}




