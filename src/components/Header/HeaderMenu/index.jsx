import React from "react";
import { Header, Place, Contact } from "./styles";
import { FaMapMarkerAlt, FaWhatsapp, FaPhone } from "react-icons/fa";

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
      </Contact>
    </Header>
  );
};

export default HeaderMenu;
