// Imports
import styled, { css } from "styled-components";
import { cssVariables } from "../../GlobalStyle";
import { ButtonS } from "../Styles/ButtonS";
import { HiMenu } from "react-icons/hi";

// Animation
import { revealLink } from "../Animations/style";

interface NavbarProps {
  menuOpen: boolean;
}

export const HeaderS = styled.header`
  /* Basic Styles */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4rem;
  /* Static */
  width: 100%;
  position: absolute;
  height: 6rem;
  top: 0;
  z-index: 1;
  /* Animation */
`;

export const Logo = styled.h1`
  /* Basic Styles */
  display: flex;
  color: #5ff8de;
  font-size: ${cssVariables.fontSizeLarger};
  /* Animation */
  animation: ${revealLink} 0.7s forwards 3.2s;
  opacity: 0;

  span {
    transition: 0.3s;
  }

  span:hover {
    transform: scaleY(2);
  }
`;

export const MenuOpener = styled.button`
  color: #ccd8f0;
  animation: ${revealLink} 0.7s forwards 3s;
  opacity: 0;
  z-index: -1;

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

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
    position: fixed;
    width: min(100%, 70vw);
    height: 100vh;
    inset: 0 0 0 auto;
    flex-direction: column;
    background-color: ${cssVariables.colorPrimary600};
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

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
  opacity: 0;
  animation: ${revealLink} 0.7s forwards;

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

  &:nth-child(1) {
    animation-delay: 3.3s;
  }
  &:nth-child(2) {
    animation-delay: 3.4s;
  }
  &:nth-child(3) {
    animation-delay: 3.5s;
  }
  &:nth-child(4) {
    animation-delay: 3.6s;
  }
`;

export const ResumeS = styled(ButtonS)`
  opacity: 0;
  animation: ${revealLink} 0.7s forwards 3.7s;
`;

export const MenuIcon = styled(HiMenu)`
  font-size: 1.7rem;
`;
