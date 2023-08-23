export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    danger: string;
    success: string;
    accent: string;
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
      labels: string; // for input label
      accent: string; // for any kind of highlighted text
      error: string; // for error
      input: string; // for text inside input
      placeholder: string; // for input placeholder
      link: string; // for link text
      [key: string] : string;
    };
    border: string; // for input and other bordered elements
    input: string; // input background
    shadow: string;
    [key: string] : string | {[key: string] : string};
  };
}




