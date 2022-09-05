import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    overflow: hidden;
    font-size: 1rem;
    line-height: 1;
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
    cursor: pointer;
  }
`;
