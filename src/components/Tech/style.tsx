import styled from "styled-components";

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
  }
`;
