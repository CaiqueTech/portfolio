import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Social } from "./components/Social";
import { MainS } from "./components/Styles/MainS";
import { GlobalStyle } from "./GlobalStyle";

export const App: React.FC = () => {
  return (
    <MainS>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Social />
    </MainS>
  );
};
