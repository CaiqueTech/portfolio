import styled from "styled-components";
import { flip } from "../Animations/style";

export const TechS = styled.section`
  height: 40vh;
  width: min(55rem, 100%);
  margin-inline: auto;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 968px) {
    padding-inline: 4em;
  }

  & > * {
    padding: 2em;
    width: 10rem;
    height: 10rem;
    color: blue;
    background-color: #fff;

    :hover {
      animation: ${flip} 1s linear forwards;
    }
  }
`;

export const TechItem = styled.div``;
