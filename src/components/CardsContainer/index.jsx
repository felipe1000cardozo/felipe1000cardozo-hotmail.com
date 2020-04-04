import React from "react";

import Card from "../Card";
import { CardsContainerStyled } from "./styles";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

const CardsContainer = ({ vehicles }) => {
  return (
    <CardsContainerStyled>
      {vehicles.map((vehicle) => {
        return <Card vehicle={vehicle} />;
      })}
      <Link to="/stock">
        <ButtonComponent value="Ver Mais" />
      </Link>
    </CardsContainerStyled>
  );
};

export default CardsContainer;
