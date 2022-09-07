import styled, { css } from "styled-components";
import { cssVariables } from "../../GlobalStyle";
import { revealText } from "../Animations/style";

export const SocialS = styled.div`
  div {
    position: fixed;
    color: #c1c1c1;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: ${revealText} 1s forwards 5s;
  }
  & > *:first-of-type {
    gap: 0.5em;
    bottom: 0;
    left: 4rem;

    & > * {
      color: #c1c1c1;
      position: relative;
      cursor: pointer;
      transition: all 2.2;
      font-size: ${cssVariables.fontSizeLarge};
    }

    & > *:hover {
      top: -5px;
    }
  }

  & > *:last-of-type {
    gap: 1em;
    bottom: 0;
    right: 4rem;

    span {
      font-size: ${cssVariables.fontSizeNormal};
      writing-mode: vertical-lr;
      cursor: pointer;
      position: relative;
    }

    span:hover {
      top: -5px;
    }
  }

  & > *::after {
    content: "";
    height: 10rem;
    width: 1px;
    background-color: white;
  }

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
