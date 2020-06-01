import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ContainerMenu } from "./styles";
import { useState } from "react";

const Menu = ({ pathname }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const OpenMenu = () => {
    setMenuOpen(true);
  };

  return (
    <ContainerMenu>
      <input type="checkbox" id="btn-menu" checked={menuOpen} />
      <label
        for="btn-menu"
        onClick={() => (menuOpen ? closeMenu() : OpenMenu())}
      >
        &#9776;
      </label>

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
            <Link
              to={"/"}
              className={pathname === "/" && "active"}
              onClick={() => closeMenu()}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to={"/stock"}
              className={pathname === "/stock" && "active"}
              onClick={() => closeMenu()}
            >
              ESTOQUE
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={pathname === "/about" && "active"}
              onClick={() => closeMenu()}
            >
              SOBRE
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={pathname === "/contact" && "active"}
              onClick={() => closeMenu()}
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
