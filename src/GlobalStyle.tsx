import { createGlobalStyle, keyframes } from "styled-components";
import { maxHeight } from "./components/Animations/style";
import { MenuOpener } from "./components/Navbar/style";

export const cssVariables = {
  // Colors
  colorPrimary900: "#061C23",
  colorPrimary800: "#092B34",
  colorPrimary700: "#0C3945",
  colorPrimary600: "#0F4657",
  colorPrimary500: "#125469",
  colorPrimary400: "#23A9D1",
  colorPrimary300: "#3FB9DE",
  colorPrimary200: "#62C6E4",
  colorPrimary100: "#73CCE7",
  colorPrimary50: "#96D9ED",
  // Font Size
  fontSizeLargest: "3.815rem",
  fontSizeLarger: "1.953rem",
  fontSizeLarge: "1.25rem",
  fontSizeNormal: "1rem",
  fontSizeSmall: "0.9rem",
  fontSizeSmaller: "0.64rem",
};

export const bodyAnimation = keyframes`
  0%{
    content: "";
  }
  100% {
    content: "";
    opacity: 0;
    display: none;
    transform: translateY(-100%);
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    overflow-x: hidden;
    height: 100vh;
  }
  body {
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    font-size: 1rem;
    line-height: 1.6;
    background: ${cssVariables.colorPrimary700};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100vh;
  }
  body::after {
    content: "CM";
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${cssVariables.fontSizeLarger};
    color: white;
    width: 100vw;
    height: 100vh;
    inset: 0;
    margin: auto;
    background-color: ${cssVariables.colorPrimary800};
    animation: ${bodyAnimation} .5s forwards 2.7s;
  }
  img {
    width: 100%;
    height: auto;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    outline: none;
    background: none;
    display: inline-block;
    cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6{
    line-height: 1;
  }
  a{
    text-decoration: none;
  }
  
`;
