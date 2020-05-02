import React from "react";
import { Link } from "react-router-dom";
import { MainMenu, Image, MenuList } from "./styles";

const Menu = ({ pathname }) => {
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
          <Link to={"/"} className={pathname === "/" && "active"}>
            HOME
          </Link>
        </li>
        <li>
          <Link to={"/stock"} className={pathname === "/stock" && "active"}>
            ESTOQUE
          </Link>
        </li>
        <li>
          <Link to={"/about"} className={pathname === "/about" && "active"}>
            SOBRE
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={pathname === "/contact" && "active"}>
            CONTATO
          </Link>
        </li>
      </MenuList>
    </MainMenu>
  );
};

export default Menu;
