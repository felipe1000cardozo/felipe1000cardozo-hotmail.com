import React from "react";
import vehicles from "../../ultils/mockupVehicles";

const VehiclePage = ({ match }) => {
  const vehicle = vehicles[match.params.id - 1];

  const { id, model, imgs, brand, year, km, price, description } = vehicle;
  return (
    <div>
      <h1>veiculo</h1>
      <h3>{model}</h3>
      <div>
        <img src={imgs[1]} alt="MOTO" />
      </div>
      <div>
        <p>{description}</p>
        <p>Marca: {brand}</p>
        <p>Ano: {year}</p>
        <p>KM: {km}</p>
      </div>
      <div>R$: {price}</div>
    </div>
  );
};

export default VehiclePage;
