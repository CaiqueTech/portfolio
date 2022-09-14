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

interface ProjectsProps {
  reversed?: boolean;
  image: string;
}

const ProjectItem = (props: ProjectsProps) => {
  return (
    <ProjectItemS reversed={props.reversed}>
      <ProjectImg>
        <img src={props.image} />
      </ProjectImg>
      <ProjectText reversed={props.reversed}>
        <ProjectDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus perspiciatis facere reprehenderit repellendus labore.
          Molestias.
        </ProjectDescription>
        <ProjectTech>
          <span>React</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Styled-Components</span>
        </ProjectTech>
      </ProjectText>
    </ProjectItemS>
  );
};

export const Projects = () => {
  return (
    <ProjectsS>
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ProjectItemContainer>
        <ProjectItem image={portfolioImg} />
        <ProjectItem image={todoImg} reversed />
        <ProjectItem image={todoImg} />
      </ProjectItemContainer>
    </ProjectsS>
  );
};
