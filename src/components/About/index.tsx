import { AboutContent, AboutImage, AboutS, AboutText } from "./style";
import { SectionTitle } from "../Styles/SectionTitle";
import { useRef } from "react";

export const About = () => {
  const aboutRef = useRef(null);

  return (
    <AboutS id="about">
      <SectionTitle>Sobre</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>
            Desenvolvedor WEB com 3-4 anos de experiência. Meu foco atualmente é
            no Desenvolvimento WEB e no Front-End, mas pretendo seguir na
            carreira de Desenvolvedor Full-Stack. Fazendo uso de Back-End e
            Banco de Dados, tecnologias das quais já possuo conhêcimento básico
            nelas.
          </p>
          <p>
            Gosto de trabalhar com a métodologia do Clean Code para trazer um
            código mais legível e também mais visualmente bonito.
          </p>
          <p>
            Uso também a métodologia do Mobile First, para assim conseguir
            trazer uma responsividade melhor para meu site.
          </p>
        </AboutText>
        <AboutImage>imagem</AboutImage>
      </AboutContent>
    </AboutS>
  );
};
