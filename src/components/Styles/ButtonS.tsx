import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

export const ButtonS = styled.button`
  position: relative;
  color: ${cssVariables.colorPrimary200};
  padding: 1em 2em;
  border: 1px solid ${cssVariables.colorPrimary200};
  font-weight: bold;

  :hover > span {
    color: ${cssVariables.colorPrimary800};
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
    background-color: ${cssVariables.colorPrimary200};
    transition: all 0.5s;
  }

  :hover::after {
    width: 100%;
  }
`;
