import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import firebase from "../../firebase";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const defaultVehicle = {
  id: "",
  model: "",
  brand: "",
  price: "",
  year: "",
  km: "",
  power: "",
  description: "",
  imgs: [""],
};

const AdminPainel = () => {
  var [vehicles, setVehicles] = useState({});
  var [newVehicle, setNewVehicle] = useState(defaultVehicle);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.app.ref("vehicles").on("value", (snapshot) => {
      setVehicles(snapshot.val());
      //setLoading(false);
    });
  }, []);

  useEffect(() => {
    setNewVehicle((prevState) => ({ ...prevState, id: vehicles.length + 1 }));
  }, [vehicles]);

  const registerNewVehicle = (event) => {
    event.preventDefault();

    console.log(newVehicle);
    firebase.app.ref("vehicles").child(vehicles.length).set(newVehicle);
    setNewVehicle(defaultVehicle);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Admin Painel</h1>

      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Adicionar novo veiculo
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Adicionar novo veiculo
          </DialogTitle>

          <DialogContent>
            <form onSubmit={(event) => registerNewVehicle(event)}>
              <TextField
                label="Marca"
                placeholder="Marca"
                value={newVehicle.brand}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, brand: event.target.value });
                }}
              />
              <br />
              <TextField
                label="Modelo"
                placeholder="Modelo"
                value={newVehicle.model}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, model: event.target.value });
                }}
              />
              <br />
              <TextField
                label="Descrição"
                placeholder="Descrição"
                value={newVehicle.description}
                onChange={(event) => {
                  setNewVehicle({
                    ...newVehicle,
                    description: event.target.value,
                  });
                }}
              />
              <br />
              <TextField
                label="Kilometragem"
                placeholder="Kilometragem"
                type="number"
                value={newVehicle.km}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, km: event.target.value });
                }}
              />
              <br />
              <TextField
                label="Potência"
                placeholder="Potência"
                type="number"
                value={newVehicle.power}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, power: event.target.value });
                }}
              />
              <br />
              <TextField
                label="Preço"
                placeholder="Preço"
                type="number"
                value={newVehicle.price}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, price: event.target.value });
                }}
              />
              <br />
              <TextField
                label="Ano"
                placeholder="Ano"
                type="number"
                value={newVehicle.year}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, year: event.target.value });
                }}
              />
              <br />
              <TextField
                label="URL img"
                placeholder="URL img"
                value={newVehicle.imgs}
                onChange={(event) => {
                  setNewVehicle({ ...newVehicle, imgs: [event.target.value] });
                }}
              />
              <br />
              <br />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button onClick={handleClose} color="primary" type="submit">
                  Cadastrar
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminPainel;
