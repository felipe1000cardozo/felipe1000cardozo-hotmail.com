import React from "react";
import Routes from "./routes";
import GlobalStyle  from "./styles/global";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  ) 
}

export default App;
