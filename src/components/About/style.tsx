import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

export const AboutS = styled.section`
  margin-top: 10rem;
  width: min(60rem, 100%);
  min-height: 40vh;
  margin-inline: auto;
`;

export const AboutContent = styled.div`
  display: flex;
  height: max-content;
  gap: 4em;

  > * {
    flex-basis: 100%;
  }

  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: ${cssVariables.colorPrimary100};
`;

export const AboutImage = styled.div`
  width: 100%;
  background-color: grey;
  color: white;
  min-height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
