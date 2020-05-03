import React, { useEffect, useState, Fragment } from "react";
import SliderGallery from "../../components/SliderGallery";
import firebase from "../../firebase";
import PreLoader from "../../components/PreLoader";
import { MainVehiclePage } from "./styles";
import { FaMotorcycle } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { GoCalendar } from "react-icons/go";
import priceMask from "../../ultils/priceMask";

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
          <MainVehiclePage>
            <div>
              <p className="title">{model}</p>
              <SliderGallery imgs={imgs} />
            </div>
            <div className="infos-vehicle">
              <p className="price"> {priceMask(price)}</p>
              <div className="description">
                <FaMotorcycle size="40" />
                <p>
                  {brand} - {model}
                </p>
              </div>
              <div className="description">
                <GoCalendar size="40" />
                <p>{year}</p>
              </div>
              <div className="description">
                <IoMdSpeedometer size="40" />
                <p>{km}</p>
              </div>
              <span>
                <h4>Descrição</h4>
                <p>{description}</p>
              </span>
            </div>
          </MainVehiclePage>
        </Fragment>
      )}
    </Fragment>
  );
};

export default VehiclePage;
