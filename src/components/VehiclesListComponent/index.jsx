import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const VehiclesListComponent = ({ vehicles }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(vehicles);
  }, []);

  return (
    <div>
      <div>
        <div>
          <h3>Veículos</h3>
        </div>
        <div>
          <FormControl className="search-container">
            <div>
              <InputLabel htmlFor="standard-adornment">Pesquisar</InputLabel>
              <Input
                id="standard-adornment"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
        <div className="list-item">
          <div>
            <p>abc-123</p>
          </div>
          <div>
            <p>Honda - Cg 150</p>
          </div>
          <div>
            <p>2010</p>
          </div>
          <div>
            <p>8000</p>
          </div>
          <div>
            <button>
              <FiEdit />
            </button>
            <button>
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesListComponent;
