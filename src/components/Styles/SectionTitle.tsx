import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

export const SectionTitle = styled.h1`
  font-size: ${cssVariables.fontSizeLarger};
  color: ${cssVariables.colorPrimary50};
  margin-bottom: 2em;

  ::after {
    content: "";
    position: relative;
    display: block;
    right: -100px;
    bottom: 15px;
    width: min(200px, 30vw);
    height: 2px;
    background-color: ${cssVariables.colorPrimary50};
  }
`;
