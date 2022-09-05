import { useState } from "react";
import {
  HeaderS,
  Logo,
  MenuLink,
  MenuOpener,
  MenuS,
  NavbarS,
  Resume,
} from "./style";

interface NavbarProps {
  menuOpen?: boolean;
}

export const Navbar = (props: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <HeaderS>
      <Logo>CM</Logo>
      <NavbarS onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}>
        <MenuS>
          <MenuLink>Sobre</MenuLink>
          <MenuLink>Tecnologias</MenuLink>
          <MenuLink>Projetos</MenuLink>
          <MenuLink>Contato</MenuLink>
        </MenuS>
        <Resume>Currículo</Resume>
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
