// Imports
import styled from "styled-components";

// CSS Variables
import { cssVariables } from "../../GlobalStyle";

import { ButtonS } from "../Styles/ButtonS";
import { revealText } from "../Animations/style";

export const HeroS = styled.section`
  width: min(55rem, 100%);
  margin-inline: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;

  @media screen and (max-width: 968px) {
    padding-inline: 4em;
  }

  & > * {
    opacity: 0;
    animation: ${revealText} 1s forwards;
  }

  @media screen and (max-width: 968px) {
    & > *:nth-child(1) {
      animation-delay: 3.5s;
    }
    & > *:nth-child(2) {
      animation-delay: 3.6s;
    }
    & > *:nth-child(3) {
      animation-delay: 3.7s;
    }
    & > *:nth-child(4) {
      animation-delay: 3.8s;
    }
    & > *:nth-child(5) {
      animation-delay: 3.9s;
    }
  }

  @media screen and (min-width: 968px) {
    & > *:nth-child(1) {
      animation-delay: 4.3s;
    }
    & > *:nth-child(2) {
      animation-delay: 4.4s;
    }
    & > *:nth-child(3) {
      animation-delay: 4.5s;
    }
    & > *:nth-child(4) {
      animation-delay: 4.6s;
    }
    & > *:nth-child(5) {
      animation-delay: 4.7s;
    }
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

export const HeroButton = styled(ButtonS)`
  color: #64ffda;
`;
