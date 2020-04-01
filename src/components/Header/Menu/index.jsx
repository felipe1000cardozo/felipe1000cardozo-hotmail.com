import React from "react";
import { Link } from "react-router-dom";
import { MainMenu, Image, MenuList } from "./styles";

const Menu = () => {
  return (
    <MainMenu>
      <Image>
        <img src="https://png.pngtree.com/element_our/png_detail/20180911/background-material-design-for-lorem-ipsum-logo-png_87814.jpg" alt="imagem logo"/>
      </Image>

      <MenuList>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/stock"}>stock</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </MenuList>
    </MainMenu>
  );
};

export default Menu;
