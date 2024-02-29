import { createGlobalStyle } from "styled-components";
import { Theme } from "./types";
export const theme: Theme<any> = {
  colors: {
    primary: "#53B1FD",
    secondary: "#13C9E7",
    tertiary: "#7A7E9F",
    transparent: "transparent",
    danger: "#FE5B78",
    success: "#027A48",
    buttonBackground: {
      primary: "#53B1FD",
      secondary: "white",
      tertiary: "#7A7E9F",
      success: "#027A48",
      danger: "#FE5B78",
      transparent: "transparent",
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
      primary: "#53B1FD",
      secondary: "#13C9E78F",
      tertiary: "#7A7E9F",
      danger: "#FE5B78E6",
      success: "#ECFDF3",
      transparent: "#F3F3F7",
    },
    text: {
      primary: '#101010',
      secondary: '#525252',
      tertiary: '#4B5565',
      label: '#697586',
      error: '#FE5B78',
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
