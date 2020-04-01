import React, { Fragment } from "react";

import Menu from "./Menu/index";
import HeaderMenu from "./HeaderMenu/index";

const Header = () => {
  return (
    <Fragment>
      <HeaderMenu />
      <Menu/>
    </Fragment>
  );
};

export default Header;
