import React from "react";
import vehicles from "../../ultils/mockupVehicles";
import CardsContainer from "../../components/CardsContainer";
import { useState } from "react";
import { useEffect } from "react";

const Stock = () => {
  const [toShowVehicles, setToShowVehicles] = useState(vehicles);
  const [order, setOrder] = useState(0);
  const [brand, setBrand] = useState("all");

  useEffect(() => {
    filterVehicles();
    // eslint-disable-next-line
  }, [brand]);

  useEffect(() => {
    orderVehicles();
    console.log(order);
    // eslint-disable-next-line
  }, [order]);

  let allBrands = vehicles.map((vehicle) => vehicle.brand);
  allBrands = allBrands.filter(function (este, i) {
    return allBrands.indexOf(este) === i;
  });

  const filterVehicles = () => {
    filterByBrand(brand);
    //orderVehicles();
    console.log(toShowVehicles);
  };

  const filterByBrand = (brand) => {
    let vehicles2 = vehicles;
    if (brand !== "all") {
      vehicles2 = vehicles.filter((vehicle) => vehicle.brand === brand);
    }
    setToShowVehicles([...vehicles2]);
    //orderVehicles();
  };

  const orderVehicles = () => {
    console.log(toShowVehicles);
    let vehicles1 = toShowVehicles;
    switch (order) {
      case 1:
        console.log("caso 1");
        vehicles1.sort((a, b) => {
          return a.year > b.year ? -1 : a.year > b.year ? 1 : 0;
        });
        break;
      case 2:
        vehicles1.sort((a, b) => {
          return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
        });
        break;
      case 3:
        vehicles1.sort((a, b) => {
          return a.price > b.price ? -1 : a.price > b.price ? 1 : 0;
        });
        break;
      case 4:
        vehicles1.sort((a, b) => {
          return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
        });
        break;
      default:
        break;
    }
    setToShowVehicles([...vehicles1]);
  };

  return (
    <div>
      <h1>Estoque</h1>
      <div>Ordenação</div>
      <select onChange={(e) => setOrder(Number(e.target.value))}>
        <option disabled defaultValue hidden>
          Ordernar por:
        </option>
        <option value={1}>Ano: Maior > Menor</option>
        <option value={2}>Ano: Menor > Maior</option>
        <option value={3}>Preço: Maior > Menor</option>
        <option value={4}>Preço: Menor > Maior</option>
      </select>
      <div>Filtros</div>

      <select
        onChange={(e) => {
          setBrand(e.target.value);
          orderVehicles();
        }}
      >
        <option value="all">Todas</option>
        {allBrands.map((b) => {
          return <option value={b}>{b}</option>;
        })}
      </select>

      <button onClick={() => filterByBrand("Yamaha")}>filtrar</button>

      <CardsContainer vehicles={toShowVehicles} />
    </div>
  );
};

export default Stock;
