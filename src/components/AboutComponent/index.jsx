import React from "react";
import Iframe from "../IframeComponent";

import { MdPhone, MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";

import { AboutComponentStyled } from "./styles";
import configInfos from "../../configInfos";

const AboutComponent = () => {
  const { telefone1, telefone2, email, endereco } = configInfos;
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.9037318043556!2d-48.63397968439691!3d-27.56549802738474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274983baa46985%3A0xd7448eab856156f9!2sR.%20Francisco%20Nappi%2C%202081%20-%20Ipiranga%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088111-600!5e0!3m2!1spt-BR!2sbr!4v1591308829981!5m2!1spt-BR!2sbr";

  return (
    <AboutComponentStyled>
      <div className="container">
        <h3>Contato</h3>
        <div>
          <p>
            <MdPhone size="30" color="#279FE1" /> Telefone <br />
            {telefone1}
          </p>
        </div>

        <div>
          <p>
            <IoLogoWhatsapp size="30" color="#279FE1" /> Whatsapp <br />
            {telefone2}
          </p>
        </div>

        <div>
          <p>
            <IoIosMail size="30" color="#279FE1" /> E-mail
            <br />
            {email}
          </p>
        </div>

        <div className="hour-container">
          <h3>Horário de atendimento</h3>
          <p>
            <AiFillClockCircle size="30" color="#279FE1" /> Segunda a
            sexta-feira: 08 às 19 horas
            <br />
            Sábado: 08 às 18 horas
            <br />
            Domingo e Feriados: Fechado.
          </p>
        </div>
      </div>

      <div className="container">
        <h3>
          <MdLocationOn size="30" />
          Rua {endereco.rua}, {endereco.numero} {endereco.complemento}
        </h3>

        <Iframe src={src} />
      </div>
    </AboutComponentStyled>
  );
};

export default AboutComponent;
