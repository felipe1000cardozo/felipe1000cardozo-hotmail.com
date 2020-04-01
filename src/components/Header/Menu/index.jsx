import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
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
      </ul>
    </div>
  );
};

export default Menu;
