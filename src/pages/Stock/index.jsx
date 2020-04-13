import React, { useState, useEffect } from "react";
import vehicles from "../../ultils/mockupVehicles";
import CardsContainer from "../../components/CardsContainer";

const Stock = () => {
  const [toShowVehicles, setToShowVehicles] = useState(vehicles);
  const [order, setOrder] = useState(0);
  const [brand, setBrand] = useState("all");
  const [maxYear, setMaxYear] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  useEffect(() => {
    orderVehicles();
    // eslint-disable-next-line
  }, [order]);

  let allBrands = vehicles.map((vehicle) => vehicle.brand);
  allBrands = allBrands.filter(function (este, i) {
    return allBrands.indexOf(este) === i;
  });

  const filterVehicles = () => {
    let vehicles2 = [...vehicles];
    vehicles2 = filterByBrand(brand, vehicles2);
    vehicles2 = filterMinYear(minYear, vehicles2);
    vehicles2 = filterMaxYear(maxYear, vehicles2);
    vehicles2 = filterMinPrice(minPrice, vehicles2);
    vehicles2 = filterMaxPrice(maxPrice, vehicles2);
    setToShowVehicles([...vehicles2]);
  };

  const filterByBrand = (brand, vehicles2) => {
    if (brand !== "all") {
      vehicles2 = vehicles2.filter((vehicle) => vehicle.brand === brand);
    }
    return vehicles2;
  };

  const filterMinPrice = (minPrice, vehicles2) => {
    vehicles2 = vehicles2.filter((vehicle) => vehicle.price >= minPrice);
    return vehicles2;
  };

  const filterMaxPrice = (maxPrice, vehicles2) => {
    if (maxPrice > 0) {
      vehicles2 = vehicles2.filter((vehicle) => vehicle.price <= maxPrice);
    }
    return vehicles2;
  };

  const filterMinYear = (minYear, vehicles2) => {
    if (minYear > 0) {
      vehicles2 = vehicles2.filter((vehicle) => vehicle.year >= minYear);
    }
    return vehicles2;
  };

  const filterMaxYear = (maxYear, vehicles2) => {
    if (maxYear > 0) {
      vehicles2 = vehicles2.filter((vehicle) => vehicle.year <= maxYear);
    }
    return vehicles2;
  };

  const orderVehicles = () => {
    let vehicles1 = toShowVehicles;
    switch (order) {
      case 1:
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
        <option disabled selected hidden>
          Ordernar por:
        </option>
        <option value={1}>Ano: Maior > Menor</option>
        <option value={2}>Ano: Menor > Maior</option>
        <option value={3}>Preço: Maior > Menor</option>
        <option value={4}>Preço: Menor > Maior</option>
      </select>
      <form>
        Filtros
        <br />
        <label>Preço: </label>
        <input
          type="number"
          placeholder="Min preço"
          value={minPrice}
          onChange={(event) => setMinPrice(Number(event.target.value))}
        />
        <input
          type="number"
          value={maxPrice}
          placeholder="Max preço"
          onChange={(event) => setMaxPrice(Number(event.target.value))}
        />
        <br />
        <label>Ano: </label>
        <input
          type="number"
          placeholder="Min Ano"
          value={minYear}
          onChange={(event) => setMinYear(Number(event.target.value))}
        />
        <input
          type="number"
          value={maxYear}
          placeholder="Max Ano"
          onChange={(event) => setMaxYear(Number(event.target.value))}
        />
      </form>

      <select
        onChange={(e) => {
          setBrand(e.target.value);
          orderVehicles();
        }}
      >
        <option value="all">Todas</option>
        {allBrands.map((b) => {
          return (
            <option value={b} key={b}>
              {b}
            </option>
          );
        })}
      </select>

      <button
        onClick={() => {
          filterVehicles();
        }}
      >
        filtrar
      </button>

      <CardsContainer vehicles={toShowVehicles} />
    </div>
  );
};

export default Stock;
