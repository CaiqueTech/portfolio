import styled, { css } from "styled-components";

import { cssVariables } from "../../GlobalStyle";

interface NavbarProps {
  menuOpen: boolean;
}

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4rem;
  height: 6rem;
  position: absolute;
  width: 100vw;
  top: 0;
`;

export const Logo = styled.h1`
  color: #5ff8de;
  font-size: ${cssVariables.fontSizeLarger};
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
    top: 0;
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
    right: 4rem;
  }
`;

export const MenuS = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const MenuLink = styled.li`
  color: #ccd8f0;
  cursor: pointer;
  padding: 1em;
  font-size: ${cssVariables.fontSizeSmall};

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
