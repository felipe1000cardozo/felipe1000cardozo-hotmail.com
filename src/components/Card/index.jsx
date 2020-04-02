import React from "react";
import { CarCard, Image, CardInfos, Price } from "./styles";

import ButtonComponent from "../ButtonComponent";

const Card = ({ vehicle }) => {
  return (
    <CarCard key={vehicle.id}>
      <h3>{vehicle.model}</h3>
      <Image>
        <img src={vehicle.imgs[1]} alt="MOTO" />
      </Image>
      <CardInfos>
        <p>Marca: {vehicle.brand}</p>
        <p>Ano: {vehicle.year}</p>
        <p>KM: {vehicle.km}</p>
      </CardInfos>
      <Price>R$: {vehicle.price}</Price>

      <ButtonComponent value="Ver Mais" />
    </CarCard>
  );
};

export default Card;
