import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

export const TechS = styled.section`
  width: min(60rem, 100%);
  min-height: 40vh;
  margin-inline: auto;
`;

export const TechContent = styled.div`
  display: flex;
  height: max-content;
  gap: 4em;

  > * {
    flex-basis: 100%;
  }
`;

export const TechText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: ${cssVariables.colorPrimary100};
`;

export const TechImage = styled.div`
  width: 100%;
  background-color: grey;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;
