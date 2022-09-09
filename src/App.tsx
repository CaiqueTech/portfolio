import { MainS } from "./components/Styles/MainS";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Tech } from "./components/Tech";
import { Social } from "./components/Social";
import { GlobalStyle } from "./GlobalStyle";

export const App: React.FC = () => {
  return (
    <MainS>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Tech />
      <Social />
    </MainS>
  );
};
