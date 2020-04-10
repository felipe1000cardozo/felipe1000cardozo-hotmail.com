import React from "react";
import { MainAbout } from "./styles";
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainAbout>
      <h1>Empresa Lorem ipsum</h1>
      <h3>Conheça um pouco sobre nosa empresa</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex
        deleniti nobis a, nulla necessitatibus neque, rerum non itaque hic
        maiores! Praesentium cumque vero architecto molestiae vel, animi iure
        eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        ex deleniti nobis a, nulla necessitatibus neque, rerum non itaque hic
        maiores! Praesentium cumque vero architecto molestiae vel, animi iure
        eaque?
      </p>
      <div>
        <img
          src="https://cdn.sitewebmotors.com.br/uploads/userGallery/5ba412b2cc77e.jpeg"
          alt="Imagem empresa"
        />
      </div>
      <Link to="/contact">
        <ButtonComponent value="Entre em contato" />
      </Link>
    </MainAbout>
  );
};

export default About;
