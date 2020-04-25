import React, { useEffect, useState, Fragment } from "react";
import SliderGallery from "../../components/SliderGallery";
import firebase from "../../firebase";

const VehiclePage = ({ match }) => {
  var [vehicle, setVehicle] = useState({});

  useEffect(() => {
    firebase.app
      .ref(`vehicles/${match.params.id - 1}`)
      .once("value", (snapshot) => {
        setVehicle(snapshot.val());
      });
  }, [match.params.id]);

  const { model, imgs, brand, year, km, price, description } = vehicle;

  return (
    <Fragment>
      {vehicle.model ? (
        <div>
          <h1>veiculo</h1>
          <h3>{model}</h3>
          <div>
            <SliderGallery imgs={imgs} />
          </div>
          <div>
            <p>{description}</p>
            <p>Marca: {brand}</p>
            <p>Ano: {year}</p>
            <p>KM: {km}</p>
          </div>
          <div>R$: {price}</div>
        </div>
      ) : (
        "carregando..."
      )}
    </Fragment>
  );
};

export default VehiclePage;
