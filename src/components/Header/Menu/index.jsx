import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ContainerMenu } from "./styles";

const Menu = ({ pathname }) => {
  return (
    <ContainerMenu>
      <input type="checkbox" id="btn-menu" />
      <label for="btn-menu">&#9776;</label>

      <div className="main-menu">
        <div className="image">
          <Link to={"/"}>
            <img
              src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89683.jpg"
              alt="imagem logo"
            />
          </Link>
        </div>

        <ul className="menu-list">
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
            <Link
              to={"/contact"}
              className={pathname === "/contact" && "active"}
            >
              CONTATO
            </Link>
          </li>
        </ul>
      </div>
    </ContainerMenu>
  );
};

export default Menu;
