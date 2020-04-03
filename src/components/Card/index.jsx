import React from "react";
import { CarCard, Image, CardInfos, Price } from "./styles";
import { Link } from "react-router-dom";
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

      <Link to={"/stock"}>
        <ButtonComponent value="Ver Mais" />
      </Link>
    </CarCard>
  );
};

export default Card;
