import { useState } from "react";
import {
  HeaderS,
  Logo,
  MenuLink,
  MenuOpener,
  MenuS,
  NavbarS,
  ResumeS,
} from "./style";
import { MenuIcon } from "./style";

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
          <MenuLink as="a" href="#about">
            Sobre
          </MenuLink>
          <MenuLink>Tecnologias</MenuLink>
          <MenuLink as="a" href="#projects">
            Projetos
          </MenuLink>
          <MenuLink as="a" href="#contact">
            Contato
          </MenuLink>
        </MenuS>
        <ResumeS
          as="a"
          download
          href="\assets\Caique Morales Silva - Currículo.pdf"
        >
          <span>Currículo</span>
        </ResumeS>
        <MenuOpener>
          <MenuIcon />
        </MenuOpener>
      </NavbarS>
      <MenuOpener onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon />
      </MenuOpener>
    </HeaderS>
  );
};
