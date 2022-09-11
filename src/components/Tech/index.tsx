import { TechItem, TechS } from "./style";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
} from "react-icons/si";

export const Tech = () => {
  return (
    <TechS>
      <TechItem>
        <SiHtml5 />
      </TechItem>
      <TechItem>
        <SiCss3 />
      </TechItem>
      <TechItem>
        <SiJavascript />
      </TechItem>
      <TechItem>
        <SiTypescript />
      </TechItem>
      <TechItem>
        <SiReact />
      </TechItem>
    </TechS>
  );
};
