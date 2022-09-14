import { MainS } from "./components/Styles/MainS";
import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Social } from "./components/Social";
import { Projects } from "./components/Projects";

export const App: React.FC = () => {
  return (
    <MainS>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Social />
    </MainS>
  );
};
