import React from "react";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import { AboutComponentStyled } from "./styles";
import configInfos from "../../configInfos";

const AboutComponent = () => {
  const { telefone1, telefone2, email, endereco } = configInfos;
  return (
    <AboutComponentStyled>
      <div className="container">
        <h3>Entre em contato</h3>

        <div>
          <p>
            <MdPhone size="40" />
            {telefone1}
          </p>
          <p>
            <IoLogoWhatsapp size="40" />
            {telefone2}
          </p>
          <p>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook size="40" />
            </a>
            Facebook
          </p>
          <p>
            <AiFillInstagram size="40" />
            Intragram
          </p>
          <p>
            <IoIosMail size="40" />
            {email}
          </p>
          <p>
            <MdLocationOn size="40" />
            Rua {endereco.rua}, {endereco.numero} {endereco.complemento}
          </p>
        </div>
      </div>
      <div className="container">
        <h3>Onde estamos</h3>
        <div>
          <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
        </div>
      </div>
    </AboutComponentStyled>
  );
};

export default AboutComponent;
