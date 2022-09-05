import styled, { css } from "styled-components";

interface NavbarProps {
  menuOpen: boolean;
}

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2em;
  height: 6rem;
`;

export const Logo = styled.h1`
  color: #5ff8de;
`;

export const MenuOpener = styled.button`
  color: #ccd8f0;

  & > span {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarS = styled.nav<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media screen and (max-width: 768px) {
    position: absolute;
    height: 100vh;
    width: min(100%, 70vw);
    right: 0;
    bottom: 0;
    background-color: #112240;
    flex-direction: column;
    transform: translateX(100%);
    transition: ease-in-out 1s;

    ${(props) =>
      props.menuOpen
        ? css`
            transform: translateX(0%);
          `
        : ""}
  }

  ${MenuOpener} {
    height: 6rem;
    position: absolute;
    top: 0em;
    right: 2em;
  }
`;

export const MenuS = styled.ul`
  display: flex;
  gap: 2em;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const MenuLink = styled.li`
  color: #ccd8f0;
  cursor: pointer;

  ::after {
    content: "";
    position: relative;
    width: 0%;
    height: 1px;
    bottom: -5px;
    display: block;
    background-color: #ccd8f0;
    transition: all 0.5s;
  }

  :hover::after {
    width: 100%;
  }
`;

export const Resume = styled.button`
  color: #ccd8f0;
  padding: 1em;
  border: 1px solid #ccd8f0;
  border-radius: 0.25em;

  :hover {
    background-color: #112240;
  }
`;
