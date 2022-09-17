import styled, { css } from "styled-components";
import { cssVariables } from "../../GlobalStyle";
import { SectionTitle } from "../Styles/SectionTitle";

interface ProjectProps {
  reversed?: boolean;
}

export const ProjectsS = styled.section``;

export const ProjectsTitle = styled(SectionTitle)`
  ::after {
    right: -140px;
  }
`;

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8em;
`;

export const ProjectItemS = styled.div<ProjectProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};

  @media screen and (max-width: 968px) {
    display: block;
  }
`;

export const ProjectImg = styled.div`
  position: relative;
  width: 100%;
  flex-basis: 100%;
  margin-inline: auto;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% - 6px);
    background: #0000005e;
    inset: 0;
    transition: background 0.2s;
    z-index: 2;
  }

  :hover::after {
    background-color: #0000000e;
  }

  @media screen and (max-width: 968px) {
    ::after {
      height: 0;
    }
  }
`;

export const ProjectText = styled.div<ProjectProps>`
  flex-basis: 50%;
  align-self: center;
  padding: 2em;
  background-color: ${cssVariables.colorPrimary600};
  color: ${cssVariables.colorPrimary50};
  z-index: 2;
  ${(props) =>
    props.reversed
      ? css`
          margin-right: -10%;
        `
      : css`
          margin-left: -10%;
        `};

  /* Responsiviness */
  @media screen and (max-width: 968px) {
    margin: 0;
    margin-top: -10px;
    word-wrap: break-word;
    word-break: break-all;
  }

  img {
    height: 100%;
  }
`;

export const ProjectDescription = styled.p`
  margin-bottom: 2em;
`;

export const ProjectTech = styled.div`
  display: flex;
  gap: 1em;
  color: ${cssVariables.colorPrimary500};
  @media screen and (max-width: 968px) {
    font-size: ${cssVariables.fontSizeNormal};
  }
`;
