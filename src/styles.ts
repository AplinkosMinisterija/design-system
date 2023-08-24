import { createGlobalStyle } from "styled-components";
import { Theme } from "./types";

export const theme: Theme = {
  colors: {
    primary: "#53B1FD",
    secondary: "#13C9E7",
    tertiary: "#7A7E9F",
    transparent: "transparent",
    danger: "#FE5B78",
    success: "#027A48",
    accent: "#febc1d",
    hover: {
      success: "#ECFDF3",
      primary: "#53B1FD",
      secondary: "#13C9E78F",
      tertiary: "#7A7E9F",
      danger: "#FE5B78E6",
      transparent: "#F3F3F7",
    },
    text: {
      primary: "",
      secondary:  "",
      tertiary: "",
      label: "#231F20",
      accent: "",
      error: "",
      input: "",
      placeholder: "",
      link: ""
    },
    border: "#CDD5DF",
    input: "#FFFFFF",
    shadow: "#121a5529"
  }
};

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: Atkinson Hyperlegible;
  }
  html { 
    font-size: 62.5%; 
    width: 100vw;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8fafc;
    font-size: 1.6rem;
    width: 100vw;
    height: 100vh;
    overflow:hidden;
  } 
  h1 {
    font-size: 3.2rem;
    color: #121A55;
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover{
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
  #__next {
    height: 100%;
  }
  textarea {
    font-size: 1.6rem;
  }
  
  .leaflet-div-icon {
    background: transparent;
    border: none;
  }
`;

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 480px)`,
  mobileL: `(max-width: 767px)`,
  mobileXL: `(max-width: 1023px)`
};
