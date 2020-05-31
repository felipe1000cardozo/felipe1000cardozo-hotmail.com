import React from "react";
import { Main } from "./styles";

const Iframe = ({ src }) => {
  return (
    <Main>
      <iframe className="iframe-infos" title="mapa" src={src}></iframe>
    </Main>
  );
};

export default Iframe;
