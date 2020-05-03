import React from "react";
import { Header, Place, Contact } from "./styles";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import configInfos from "../../../configInfos.json";

const HeaderMenu = () => {
  const { endereco, telefone1, telefone2 } = configInfos;
  return (
    <Header>
      <Place>
        <FaMapMarkerAlt color="#fff" size="20" />
        <p>
          Rua {endereco.rua}, {endereco.numero} {endereco.complemento}
        </p>
      </Place>

      <Contact>
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

        <a href="#">
          <AiOutlineMail size="22" color="#fff" />
        </a>
      </Contact>
    </Header>
  );
};

export default HeaderMenu;
