import React from "react";
import { Header } from "./styles";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

import configInfos from "../../../configInfos.json";

const HeaderMenu = () => {
  const { endereco, telefone1, telefone2 } = configInfos;
  return (
    <Header>
      <div className="adress">
        <p>
          <FaMapMarkerAlt color="#fff" size="20" />
          Rua {endereco.rua}, {endereco.numero} {endereco.complemento}
        </p>
      </div>

      <div className="contact">
        <FaPhone color="#fff" size="17" />
        <a href={`tel:${telefone1}`}>{telefone1}</a>

        <FaWhatsapp color="#fff" size="20" />
        <a href={`tel:${telefone2}`}>{telefone2}</a>
        <a href="https://www.facebook.com/" target="blank">
          <RiFacebookCircleLine size="20" color="#fff" />
        </a>

        <a href="https://www.instagram.com/" target="blank">
          <FiInstagram size="20" color="#fff" />
        </a>
      </div>
    </Header>
  );
};

export default HeaderMenu;
