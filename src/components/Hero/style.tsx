// Imports
import styled from "styled-components";

// CSS Variables
import { cssVariables } from "../../GlobalStyle";

export const HeroS = styled.section`
  width: min(50rem, 100%);
  margin-inline: auto;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;

  @media screen and (max-width: 968px) {
    padding-inline: 4em;
  }
`;

export const Hi = styled.p`
  color: #57dfc2;
  font-size: ${cssVariables.fontSizeLarge};

  @media screen and (max-width: 968px) {
    font-size: ${cssVariables.fontSizeNormal};
  }
`;

export const Name = styled.h1`
  color: #ccd6f6;
  font-size: ${cssVariables.fontSizeLargest};

  @media screen and (max-width: 968px) {
    font-size: ${cssVariables.fontSizeLarger};
  }
`;

export const Profission = styled.h1`
  color: #8892b0;
  font-size: ${cssVariables.fontSizeLargest};

  @media screen and (max-width: 968px) {
    font-size: ${cssVariables.fontSizeLarger};
  }
`;

export const Description = styled.p`
  font-size: ${cssVariables.fontSizeLarge};
  color: #8892b0;
  max-width: 30rem;

  @media screen and (max-width: 968px) {
    font-size: ${cssVariables.fontSizeNormal};
  }
`;

export const HeroButton = styled.button`
  color: #64ffda;
`;
