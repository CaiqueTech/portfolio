import styled from "styled-components";

export const ButtonS = styled.button`
  position: relative;
  color: #ccd8f0;
  padding: 1em 2em;
  border: 1px solid #ccd8f0;
  font-weight: bold;

  :hover > span {
    color: #0a1930;
    position: relative;
    z-index: 2;
    transition: all 0.5s;
  }

  ::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    inset: 0;
    display: block;
    background-color: #ccd8f0;
    transition: all 0.5s;
  }

  :hover::after {
    width: 100%;
  }
`;
