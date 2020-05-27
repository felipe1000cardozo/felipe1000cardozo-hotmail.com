import React, { Fragment } from "react";
import Iframe from "../../components/IframeComponent/index";
import CardContact from "../../components/CardContactComponent";
import { MainCantact } from "./styles";

const Contact = () => {
  return (
    <MainCantact>
      <h1>Entre em contato com a gente</h1>
      <CardContact />
      <span>Nos encontre aqui!</span>
      <Iframe />
    </MainCantact>
  );
};

export default Contact;
