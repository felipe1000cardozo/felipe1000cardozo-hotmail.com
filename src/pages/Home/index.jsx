import React, { Fragment } from "react";

import Slider from "../../components/Slider";
import CardsContainer from "../../components/CardsContainer";

import vehicles from "../../ultils/mockupVehicles";
import AboutComponent from "../../components/AboutComponent";

let fourVehicles = [];

for (let i = 0; i <= 3; i++) {
  fourVehicles[i] = vehicles[i];
}

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <AboutComponent />
    </Fragment>
  );
};

export default Home;
