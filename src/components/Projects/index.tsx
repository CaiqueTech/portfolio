import {
  ProjectsS,
  ProjectsTitle,
  ProjectText,
  ProjectDescription,
  ProjectTech,
  ProjectImg,
  ProjectItemS,
  ProjectItemContainer,
} from "./style";

import todoImg from "../../assets/todo-desktop.png";
import portfolioImg from "../../assets/portfolio-desktop.png";
import bookmarkImg from "../../assets/bookmark-desktop.png";
import calculatorImg from "../../assets/calculator-desktop.png";

interface ProjectsProps {
  reversed?: boolean;
  image: string;
  description: string;
  techs: string;
}

const ProjectItem = (props: ProjectsProps) => {
  return (
    <ProjectItemS reversed={props.reversed}>
      <ProjectImg>
        <img src={props.image} />
      </ProjectImg>
      <ProjectText reversed={props.reversed}>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectTech>{props.techs}</ProjectTech>
      </ProjectText>
    </ProjectItemS>
  );
};

export const Projects = () => {
  return (
    <ProjectsS>
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ProjectItemContainer>
        <ProjectItem
          description="Portfolio para mostrar meus conhecimentos, habilidades e falar um pouco sobre mim mesmo."
          techs="React · TypeScript · Styled-Components"
          image={portfolioImg}
        />
        <ProjectItem
          description="Aplicação TODO para anotar tarefas. Possuindo as opções, deletar, fixar e completar tarefa."
          techs="React · TypeScript · Styled-Components · LocalStorage"
          image={todoImg}
          reversed
        />
        <ProjectItem
          description="Calculadora com operações básicas, tendo adição, subtração, multiplicalçao e divisão. Possui um sistema de sobrescrever a última operação caso não seja a desejada."
          techs="React · JavaScript · useReducer · CSS"
          image={calculatorImg}
        />
        <ProjectItem
          description="Landing page sobre uma extensão do chrome."
          techs="React · JavaScript · CSS"
          image={bookmarkImg}
          reversed
        />
      </ProjectItemContainer>
    </ProjectsS>
  );
};
