import React from "react";
import { Foot } from "./styles";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  return (
    <Fragment>
      {pathname === "/admin" || pathname === "/login" ? null : (
        <Foot>
          <div className="path">
            <div>
              <h4>Atendimento</h4>
              <p>
                Segunda a Sexta: 08:00 – 19:00 <br />
                Sábado: 08:00 – 18:00 <br />
                Domingo e Feriados: Fechado
              </p>
            </div>
            <div>
              <h4>Endereço:</h4>
              <p>
                Rua Francisno nappi, 1419
                <br />
                Bairro ipiranga, São José – SC <br />
                Cep:88111490
              </p>
            </div>
          </div>
          <div className="company-info">
            <h4>Redes Sociais:</h4>
            <div>
              <a href="https://www.facebook.com/" target="blank">
                <RiFacebookCircleLine size="40" color="#fff" />
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <FiInstagram size="40" color="#fff" />
              </a>
            </div>
          </div>
        </Foot>
      )}
    </Fragment>
  );
};

export default Footer;
