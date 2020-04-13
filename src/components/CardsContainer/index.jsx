import React from "react";

import Card from "../Card";
import { CardsContainerStyled } from "./styles";

const CardsContainer = ({ vehicles }) => {
  return (
    <CardsContainerStyled>
      {vehicles.map((vehicle) => {
        return <Card vehicle={vehicle} key={vehicle.id} />;
      })}
    </CardsContainerStyled>
  );
};

export default CardsContainer;
