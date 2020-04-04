import React, { Fragment } from "react";

import Slider from "../../components/Slider";
import CardsContainer from "../../components/CardsContainer";

import vehicles from "../../ultils/mockupVehicles";

let fourVehicles = [];

for (let i = 0; i <= 3; i++) {
  fourVehicles[i] = vehicles[i];
}

console.log(fourVehicles);

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <CardsContainer vehicles={fourVehicles} />
    </Fragment>
  );
};

export default Home;
