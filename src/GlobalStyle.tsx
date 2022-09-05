import { createGlobalStyle } from "styled-components";

export const cssVariables = {
  fontSizeLargest: "3.815rem",
  fontSizeLarger: "1.953rem",
  fontSizeLarge: "1.25rem",
  fontSizeNormal: "1rem",
  fontSizeSmall: "0.9rem",
  fontSizeSmaller: "0.64rem",
};

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    overflow-x: hidden;
  }
  body {
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    font-size: 1rem;
    line-height: 1.6;
    background: #0a1930;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
