import { useState } from "react";
import { ButtonS } from "../Styles/ButtonS";
import { HeaderS, Logo, MenuLink, MenuOpener, MenuS, NavbarS } from "./style";

interface NavbarProps {
  menuOpen?: boolean;
}

export const Navbar = (props: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <HeaderS>
      <Logo as="a" href="localhost:5173">
        <span>C</span>
        <span>M</span>
      </Logo>
      <NavbarS onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}>
        <MenuS>
          <MenuLink>Sobre</MenuLink>
          <MenuLink>Tecnologias</MenuLink>
          <MenuLink>Projetos</MenuLink>
          <MenuLink>Contato</MenuLink>
        </MenuS>
        <ButtonS>
          <span>Currículo</span>
        </ButtonS>
        <MenuOpener>
          <span className="material-symbols-outlined">menu</span>
        </MenuOpener>
      </NavbarS>
      <MenuOpener onClick={() => setMenuOpen(!menuOpen)}>
        <span className="material-symbols-outlined">menu</span>
      </MenuOpener>
    </HeaderS>
  );
};
