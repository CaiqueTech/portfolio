import { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./GlobalStyle";

export const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
    </Fragment>
  );
};
