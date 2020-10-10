import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StyledVehiclesList } from "./styles";

const VehiclesListComponent = ({ vehicles, deleteVehicle, editVehicle }) => {
  const [search, setSearch] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  useEffect(() => {}, []);

  const handleDeleteVehicle = (id) => {
    deleteVehicle(id);
  };

  const handleEditVehicle = (id) => {
    editVehicle(id);
  };

  const handleFilter = (value) => {
    setSearch(value);
    setFilteredVehicles(
      vehicles.filter((vehicle) => {
        return (
          vehicle.brand.toLowerCase().includes(value) ||
          vehicle.plate.toLowerCase().includes(value)
        );
      })
    );
  };

  return (
    <StyledVehiclesList>
      <div className="header">
        <div>
          <h2>Veículos</h2>
        </div>
        <div>
          <FormControl className="search-container">
            <div>
              <InputLabel htmlFor="standard-adornment">Pesquisar</InputLabel>
              <Input
                id="standard-adornment"
                type="text"
                value={search}
                onChange={(e) => handleFilter(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <FaSearch color="#737373" />
                  </InputAdornment>
                }
              />
            </div>
          </FormControl>
        </div>
      </div>
      <div>
        <div className="header-list">
          <div>
            <h4>#</h4>
          </div>
          <div>
            <h4>Placa</h4>
          </div>
          <div>
            <h4>Marca/Modelo</h4>
          </div>
          <div>
            <h4>Ano</h4>
          </div>
          <div>
            <h4>Valor</h4>
          </div>
          <div>
            <h4>Editar/Excluir</h4>
          </div>
        </div>
        {filteredVehicles.map((vehicle, index) => (
          <div className="list-item" key={vehicle.id}>
            <div>
              <p>{index + 1}</p>
            </div>
            <div>
              <p>{vehicle.plate}</p>
            </div>
            <div>
              <p>
                {vehicle.brand} - {vehicle.model}
              </p>
            </div>
            <div>
              <p>{vehicle.year}</p>
            </div>
            <div>
              <p>{vehicle.price}</p>
            </div>
            <div>
              <Tooltip title="Editar veículo" placement="top">
                <button onClick={() => handleEditVehicle(vehicle.id)}>
                  <FiEdit size="20" />
                </button>
              </Tooltip>
              <Tooltip title="Excluir veículo" placement="top">
                <button onClick={() => handleDeleteVehicle(vehicle.id)}>
                  <RiDeleteBin6Line size="20" />
                </button>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </StyledVehiclesList>
  );
};

export default VehiclesListComponent;
