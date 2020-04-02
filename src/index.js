import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import configInfo from "./configInfos.json";

document.title = configInfo.nome;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
