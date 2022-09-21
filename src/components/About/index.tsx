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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
            porro minima. Id labore vel molestiae eum expedita voluptatibus
            autem!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur esse ducimus unde pariatur similique odit natus
            adipisci sapiente ut a.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            tempore cum, ullam hic harum possimus vitae voluptatum asperiores
            aut deserunt!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ipsum deserunt commodi similique illo pariatur perferendis at quos
            consequatur voluptatem! autem!
          </p>
        </AboutText>
        <AboutImage>imagem</AboutImage>
      </AboutContent>
    </AboutS>
  );
};
