import React from "react";
import {Header, Place, Contact} from "./styles"
import {FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa'

const HeaderMenu = () => {
  return (
    <Header>
      <Place>
        <FaMapMarkerAlt color='#fff' size='20px' />
        <p>Rua Francisco Nappi, 1419 - ap 06</p>
      </Place>

      <Contact>
        <FaWhatsapp color='#fff' size='20px'/>
        <p>(48)99999-9999</p>
        <FaPhone color='#fff' size='20px'/>
        <p>(48)33333-3333</p>
      </Contact>
    </Header>
  );
};

export default HeaderMenu;
