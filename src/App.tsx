import { Fragment } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./GlobalStyle";

export const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </Fragment>
  );
};
