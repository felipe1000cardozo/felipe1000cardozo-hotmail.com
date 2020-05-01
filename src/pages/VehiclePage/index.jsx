import React, { useEffect, useState, Fragment } from "react";
import SliderGallery from "../../components/SliderGallery";
import firebase from "../../firebase";
import PreLoader from "../../components/PreLoader";
import { MainVehiclePage } from "./styles";

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
        <Fragment>
          <h3>{model}</h3>
          <MainVehiclePage>
            <div clasname="slider-vehicle">
              <SliderGallery imgs={imgs} />
            </div>
            <div className="infos-vehicle">
              <p className="price">R$: {price}</p>
              <p>Marca: {brand}</p>
              <p>Ano: {year}</p>
              <p>KM: {km}</p>
              <p>{description}</p>
            </div>
          </MainVehiclePage>
        </Fragment>
      )}
    </Fragment>
  );
};

export default VehiclePage;
