import React, { Fragment } from "react";
import Iframe from "../../components/IframeComponent/index";
import CardContact from "../../components/CardContactComponent";
import { MainCantact } from "./styles";
import HeaderPageComponent from "../../components/HeaderPageComponent";

const Contact = () => {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.966844976754!2d-48.631229084396935!3d-27.563539427300668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274982d4f92763%3A0x84aa2694e73ff9a1!2sR.%20Francisco%20Nappi%2C%201419%20-%20Ipiranga%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088111-600!5e0!3m2!1spt-BR!2sbr!4v1590608421259!5m2!1spt-BR!2sbr";
  return (
    <MainCantact>
      <HeaderPageComponent title="Entre em contato com a gente" />
      <CardContact />
      <span>Nos encontre aqui!</span>
      <Iframe src={src} />
    </MainCantact>
  );
};

export default Contact;
