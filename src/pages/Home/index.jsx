import React from "react";

import { Cards } from "./styles";
import Card from "../../components/Card";
import Vehicles from "../../ultils/mockupVehicles";

const Home = () => {
  return (
    <div>
      {Vehicles.map(vehicle => {
        return (
          <Cards>
            <Card vehicle={vehicle} />
          </Cards>
        );
      })}
    </div>
  );
};

export default Home;
