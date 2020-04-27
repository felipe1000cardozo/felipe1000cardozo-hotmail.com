import React, { Fragment } from "react";

import Menu from "./Menu/index";
import HeaderMenu from "./HeaderMenu/index";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  return (
    <Fragment>
      {pathname === "/admin" || pathname === "/login" ? null : (
        <Fragment>
          <HeaderMenu />
          <Menu />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Header;
