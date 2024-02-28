import { createGlobalStyle } from "styled-components";
import { Theme } from "./types";
import {ButtonColors} from "./constants.ts";

export const theme: Theme = {
  colors: {
    [ButtonColors.PRIMARY]: "#53B1FD",
    [ButtonColors.SECONDARY]: "#13C9E7",
    [ButtonColors.TERTIARY]: "#7A7E9F",
    [ButtonColors.TRANSPARENT]: "transparent",
    [ButtonColors.DANGER]: "#FE5B78",
    [ButtonColors.SUCCESS]: "#027A48",
    accent: "#febc1d",
    buttonBackground: {
      [ButtonColors.PRIMARY]: "#53B1FD",
      [ButtonColors.SECONDARY]: "white",
      [ButtonColors.TERTIARY]: "#7A7E9F",
      [ButtonColors.SUCCESS]: "#027A48",
      [ButtonColors.DANGER]: "#FE5B78",
      [ButtonColors.TRANSPARENT]: "transparent",
    },
    buttonText: {
      [ButtonColors.PRIMARY]: '#101010',
      [ButtonColors.SECONDARY]: '#101010',
      [ButtonColors.TERTIARY]: 'white',
      [ButtonColors.DANGER]: 'white',
      [ButtonColors.SUCCESS]: 'white',
      [ButtonColors.TRANSPARENT]: '#101010',
    },
    hover: {
      [ButtonColors.PRIMARY]: "#53B1FD",
      [ButtonColors.SECONDARY]: "#13C9E78F",
      [ButtonColors.TERTIARY]: "#7A7E9F",
      [ButtonColors.DANGER]: "#FE5B78E6",
      [ButtonColors.SUCCESS]: "#ECFDF3",
      [ButtonColors.TRANSPARENT]: "#F3F3F7",
    },
    text: {
      [ButtonColors.PRIMARY]: '#101010',
      [ButtonColors.SECONDARY]: '#525252',
      [ButtonColors.TERTIARY]: '#4B5565',
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
