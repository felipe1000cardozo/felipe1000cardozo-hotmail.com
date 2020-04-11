import React from "react";
import { CarCard, Image, CardInfos, Price } from "./styles";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { memo } from "react";

const Card = ({ vehicle }) => {
  const { id, model, imgs, brand, year, km, price } = vehicle;
  return (
    <CarCard key={id}>
      <h3>{model}</h3>
      <Image>
        <img src={imgs[1]} alt="MOTO" />
      </Image>
      <CardInfos>
        <p>Marca: {brand}</p>
        <p>Ano: {year}</p>
        <p>KM: {km}</p>
      </CardInfos>
      <Price>R$: {price}</Price>

      <Link to={`/stock/${id}`}>
        <ButtonComponent value="Ver Mais" />
      </Link>
    </CarCard>
  );
};

export default memo(Card);
