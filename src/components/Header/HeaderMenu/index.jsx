import React from "react";
import {Header, Place} from "./styles"

const HeaderMenu = () => {
  return (
    <Header>
      <Place>
        <p>Rua Francisco Nappi, 1419 - ap 06</p>
      </Place>

      <div>
        <p>(48)99999-9999</p>
        <p>(48)33333-3333</p>
      </div>
    </Header>
  );
};

export default HeaderMenu;
