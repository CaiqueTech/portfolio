import styled from "styled-components";

export const TechS = styled.section`
  min-height: 40vh;
  width: min(55rem, 100%);
  margin: 4em auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  gap: 2em;

  @media screen and (max-width: 968px) {
    margin-inline: auto;
    padding-inline: 4em;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > * {
    padding: 2em;
    width: 10rem;
    height: 10rem;
    color: #235cb1;
    cursor: pointer;
    /* Glassmorphism */
    background: rgba(10, 25, 48, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

export const TechItem = styled.div``;
