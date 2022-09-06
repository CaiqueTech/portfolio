import { Description, HeroButton, HeroS, Hi, Name, Profission } from "./style";

export const Hero = () => {
  return (
    <HeroS>
      <Hi>Olá, meu nome é</Hi>
      <Name>Caique Morales.</Name>
      <Profission>Desenvolvedor WEB.</Profission>
      <Description>
        Sou um desenvolvedor WEB especializado no Front-End (também com
        conhecimentos no Back-End). Atualmente estou focado nas tecnologias
        React e Typescript.
      </Description>
      <HeroButton>
        <span>Ver projetos</span>
      </HeroButton>
    </HeroS>
  );
};
