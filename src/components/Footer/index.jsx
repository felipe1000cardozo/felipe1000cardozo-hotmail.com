import React from "react";
import { Foot, Path, CompanyInfo } from "./styles";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  return (
    <Fragment>
      {pathname === "/admin" || pathname === "/login" ? null : (
        <Foot>
          <Path>
            <h4>Vehicles shop</h4>
          </Path>
          <CompanyInfo>
            <p>Todos os direitos Reservados </p>
            <p>A&F Desenvolvimento</p>
          </CompanyInfo>
        </Foot>
      )}
    </Fragment>
  );
};

export default Footer;
