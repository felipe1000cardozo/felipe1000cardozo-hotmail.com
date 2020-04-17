import React, { Fragment } from "react";

import Slider from "../../components/Slider";
import Card from "../../components/Card";

import vehicles from "../../ultils/mockupVehicles";
import AboutComponent from "../../components/AboutComponent";
import { Cards } from "./styles";
import ButtonComponent from "../../components/ButtonComponent";

let fourVehicles = [];

for (let i = 0; i <= 3; i++) {
  fourVehicles[i] = vehicles[i];
}

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Cards>
        {fourVehicles.map((vehicle) => {
          return <Card vehicle={vehicle} key={vehicle.id} />;
        })}
        <div>
          <ButtonComponent value="Ver Mais" />
        </div>
      </Cards>

      <AboutComponent />
    </Fragment>
  );
};

export default Home;
