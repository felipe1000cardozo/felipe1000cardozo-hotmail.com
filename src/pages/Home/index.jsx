import React from "react";
import Card from "../../components/Card";
import Vehicles from "../../ultils/mockupVehicles";
import { Cards } from "./styles";

const Home = () => {
  return (
    <Cards>
      {Vehicles.map(vehicle => {
        return <Card vehicle={vehicle} />;
      })}
    </Cards>
  );
};

export default Home;
