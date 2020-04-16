import React, { useState } from "react";
import { Pagination } from "@material-ui/lab";

import Card from "../Card";
import { CardsContainerStyled } from "./styles";
import { useEffect } from "react";

const CardsContainer = ({
  vehicles,
  currentPage,
  setCurrentPage,
  vehiclesPerPage,
}) => {
  const numberOfPages = Math.ceil(vehicles.length / vehiclesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [numberOfPages]);

  return (
    <CardsContainerStyled>
      {vehicles
        .slice(
          currentPage * vehiclesPerPage - vehiclesPerPage,
          currentPage * vehiclesPerPage - vehiclesPerPage + vehiclesPerPage
        )
        .map((vehicle) => {
          return <Card vehicle={vehicle} key={vehicle.id} />;
        })}

      {numberOfPages ? (
        <div className="container-pagination">
          <Pagination
            count={numberOfPages}
            page={currentPage}
            color="primary"
            onChange={(e, event) => setCurrentPage(event)}
          />
        </div>
      ) : null}
    </CardsContainerStyled>
  );
};

export default CardsContainer;
