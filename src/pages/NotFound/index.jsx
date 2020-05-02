import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { MdBrokenImage } from "react-icons/md";
import { NotfoundContainer } from "./styles";

const NotFound = () => {
  return (
    <NotfoundContainer>
      <div>
        <MdBrokenImage size={300} />
      </div>
      <h1>Página não encontrada</h1>
      <Link to={"./"}>
        <Button variant="contained">Voltar para Home</Button>
      </Link>
    </NotfoundContainer>
  );
};

export default NotFound;
