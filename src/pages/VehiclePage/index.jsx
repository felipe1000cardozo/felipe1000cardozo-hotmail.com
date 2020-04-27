import React, { useEffect, useState, Fragment } from "react";
import SliderGallery from "../../components/SliderGallery";
import firebase from "../../firebase";
import PreLoader from "../../components/PreLoader";

const VehiclePage = ({ match }) => {
  var [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.app
      .ref("vehicles")
      .child(`/${match.params.id - 1}`)
      .once("value", (snapshot) => {
        setVehicle(snapshot.val());
        setLoading(false);
      });
  }, [match.params.id]);

  const { model, imgs, brand, year, km, price, description } = vehicle;

  return (
    <Fragment>
      {loading ? (
        <PreLoader />
      ) : (
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
      )}
    </Fragment>
  );
};

export default VehiclePage;
