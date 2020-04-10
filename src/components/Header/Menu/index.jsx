import React from "react";
import { Link } from "react-router-dom";
import { MainMenu, Image, MenuList } from "./styles";

const Menu = () => {
  return (
    <MainMenu>
      <Image>
        <Link to={"/"}>
          <img
            src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89683.jpg"
            alt="imagem logo"
          />
        </Link>
      </Image>

      <MenuList>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/stock"}>ESTOQUE</Link>
        </li>
        <li>
          <Link to={"/about"}>SOBRE</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTATO</Link>
        </li>
      </MenuList>
    </MainMenu>
  );
};

export default Menu;
