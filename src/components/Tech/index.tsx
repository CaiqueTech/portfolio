import { TechContent, TechImage, TechS, TechText } from "./style";
import { SectionTitle } from "../Styles/SectionTitle";

export const Tech = () => {
  return (
    <TechS>
      <SectionTitle>Sobre</SectionTitle>
      <TechContent>
        <TechText>
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
        </TechText>
        <TechImage>imagem</TechImage>
      </TechContent>
    </TechS>
  );
};
