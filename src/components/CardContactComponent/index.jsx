import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import configInfos from "../../configInfos.json";
import { MainCardContact } from "./styles";

const CardContact = () => {
  const { telefone1, telefone2 } = configInfos;
  return (
    <MainCardContact>
      <div className="card-infos">
        <AiOutlineMail size="44" color="#279FE1" />
        <h4>E-mail</h4>
        <p>
          Mande um e-mail,
          <br /> responderemos brevemente
        </p>
        <a href="*"> fulano@fulano.com </a>
      </div>

      <div className="card-infos">
        <FaPhone size="44" color="#279FE1" />
        <h4>Telefone</h4>
        <p>
          Nos ligue quando <br />
          quiser
        </p>
        <a href={`tel:${telefone1}`}>{telefone1}</a>
      </div>

      <div className="card-infos">
        <FaWhatsapp size="44" color="#279FE1" />
        <h4>Whatsapp</h4>
        <p>
          Nos chame atravéz de <br />
          mensagem via whatsapp
        </p>
        <a href={`tel:${telefone2}`}>{telefone2}</a>
      </div>
    </MainCardContact>
  );
};

export default CardContact;
