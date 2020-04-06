import React from "react";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";

import { AboutComponentStyled } from "./styles";
import configInfos from "../../configInfos";

const AboutComponent = () => {
  const { telefone1, telefone2, email, endereco } = configInfos;
  return (
    <AboutComponentStyled>
      <div className="container">
        <h3>Entre em contato</h3>

        <div>
          <p>
            <MdPhone />
            {telefone1}
          </p>
          <p>
            <IoLogoWhatsapp />
            {telefone2}
          </p>
          <p>
            <IoIosMail />
            {email}
          </p>
          <p>
            <MdLocationOn />
            Rua {endereco.rua}, {endereco.numero} {endereco.complemento}
          </p>
        </div>
      </div>
      <div className="container">
        <h3>Onde estamos</h3>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/eeaf/f2e9/82bf9efdf05f576ae719f91751c19ba1?Expires=1587340800&Signature=SskO0xRBPKFb8dV6BJ3qTdJCV8ekhfncnbIgSJU6FR866q3BiF-Nx-UsP-bNvUhRYAhmPazl0ZhMjE47RLFomsZ~4f6jb~90vbFtW2lT36oIg-UfiDZYi8vkYceC-e8x3Br~x~CqOHjsD-jGrYslCjFmcvj2pFGE1cYlqGlWF5nW-1gSTToXNRGtv4ioKfOIQCDAI43ktIQ2K7hu7Q~M3kFRNvkJK0X3KCRDtO8uhT6iwSsaz30-LnJfjWNmVy5sI2Pne3L99Bc17yDIcNkZNujsFgjiA1egZHCfdmV0F8AW~tnVKNzNxYrdB2QCpDmN4nqx18-6ZgX2sTsdrI6KuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </div>
      </div>
    </AboutComponentStyled>
  );
};

export default AboutComponent;
