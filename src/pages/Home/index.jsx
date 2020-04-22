import React, { Fragment, useState, useEffect } from "react";

import Slider from "../../components/Slider";
import Card from "../../components/Card";

import AboutComponent from "../../components/AboutComponent";
import { Cards } from "./styles";
import ButtonComponent from "../../components/ButtonComponent";

import firebase from "../../firebase";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    firebase.app.ref("vehicles").once("value", (snapshot) => {
      let fourVehicles = [];

      for (let i = 0; i <= 3; i++) {
        fourVehicles[i] = snapshot.val()[i];
      }
      setVehicles(fourVehicles);
    });
  }, []);

  return (
    <Fragment>
      <Slider />
      {vehicles.length ? (
        <Cards>
          {vehicles.map((vehicle) => {
            return <Card vehicle={vehicle} key={vehicle.id} />;
          })}
          <div>
            <ButtonComponent value="Ver Mais" />
          </div>
        </Cards>
      ) : (
        "carregando..."
      )}

      <AboutComponent />
    </Fragment>
  );
};

export default Home;
