import { ButtonS } from "../Styles/ButtonS";
import { Description, HeroButton, HeroS, Hi, Name, Profission } from "./style";

export const Hero = () => {
  return (
    <HeroS>
      <Hi>Olá, meu nome é</Hi>
      <Name>Caique Morales.</Name>
      <Profission>Desenvolvedor WEB.</Profission>
      <Description>
        Eu sou um desenvolvedor WEB especializado no Front-End (também com
        conhecimentos no Back-End). Atualmente estou focado nas tecnologias
        React e Typescript.
      </Description>
      <ButtonS>
        <span>Ver projetos</span>
      </ButtonS>
    </HeroS>
  );
};
