import React, { useEffect, useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import firebase from "../../firebase";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import PreLoader from "../../components/PreLoader";
import VehiclesListComponent from "../../components/VehiclesListComponent";
import { StyledAdminPainel, FormContainer, AddPhotosButton } from "./styles";
import { RiStore3Line } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const defaultVehicle = {
  id: "",
  model: "",
  brand: "",
  price: "",
  year: "",
  km: "",
  power: "",
  description: "",
  plate: "",
  imgs: [""],
};

const AdminPainel = ({ history }) => {
  const [vehicles, setVehicles] = useState({});
  const [newVehicle, setNewVehicle] = useState(defaultVehicle);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.app.ref("vehicles").on("value", (snapshot) => {
      setVehicles(snapshot.val());
      setLoading(false);
    });
  }, []);

  async function logout() {
    await firebase.logout().catch((error) => console.log(error));
    history.push("/");
  }

  useEffect(() => {
    console.log(firebase.getCurrent());
    // if (!firebase.getCurrent()) {
    //   //props.history.replace("/login");
    //   return null;
    // }

    // firebase.getUserName(info => {
    //   localStorage.userName = info.val().nome;
    //   setNome(localStorage.userName);
    // });
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
    <Fragment>
      {loading ? (
        <PreLoader />
      ) : (
        <StyledAdminPainel>
          <div className="container-buttons">
            <div>
              <Link to="/" target="blank">
                <Tooltip title="Abrir página da loja" placement="left">
                  <Button
                    id="background-green"
                    variant="contained"
                    color="secondary"
                  >
                    <RiStore3Line size="24" />
                  </Button>
                </Tooltip>
              </Link>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                className="h-100"
              >
                Adicionar novo veiculo
              </Button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Adicionar novo veiculo
              </DialogTitle>

              <DialogContent>
                <FormContainer onSubmit={(event) => registerNewVehicle(event)}>
                  <div id="container-simple-inputs">
                    <div>
                      <TextField
                        label="Modelo"
                        placeholder="Modelo"
                        value={newVehicle.model}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            model: event.target.value,
                          });
                        }}
                      />
                      <TextField
                        label="Ano"
                        placeholder="Ano"
                        type="number"
                        value={newVehicle.year}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            year: event.target.value,
                          });
                        }}
                      />
                      <TextField
                        label="Preço"
                        placeholder="Preço"
                        type="number"
                        value={newVehicle.price}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            price: event.target.value,
                          });
                        }}
                      />
                      <TextField
                        label="Potência (cc)"
                        placeholder="Potência (cc)"
                        type="number"
                        value={newVehicle.power}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            power: event.target.value,
                          });
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        label="Marca"
                        placeholder="Marca"
                        value={newVehicle.brand}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            brand: event.target.value,
                          });
                        }}
                      />
                      <TextField
                        label="Kilometragem"
                        placeholder="Kilometragem"
                        type="number"
                        value={newVehicle.km}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            km: event.target.value,
                          });
                        }}
                      />
                      <TextField
                        label="Placa"
                        placeholder="Placa"
                        value={newVehicle.plate}
                        onChange={(event) => {
                          setNewVehicle({
                            ...newVehicle,
                            plate: event.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="description-input-container">
                    <TextField
                      label="Descrição"
                      multiline
                      value={newVehicle.description}
                      fullWidth
                      rows={3}
                      defaultValue="descrição"
                      variant="outlined"
                      onChange={(event) => {
                        setNewVehicle({
                          ...newVehicle,
                          description: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="add-photos-container">
                    <p>Fotos</p>
                    <div className="photos-container">
                      <img
                        src="https://media.gazetadopovo.com.br/2019/09/13112603/moto-leilao-640x372.png"
                        alt=""
                      />
                      <img
                        src="https://media.gazetadopovo.com.br/2019/09/13112603/moto-leilao-640x372.png"
                        alt=""
                      />
                      <img
                        src="https://media.gazetadopovo.com.br/2019/09/13112603/moto-leilao-640x372.png"
                        alt=""
                      />

                      <Tooltip title="Adicionar foto" placement="top">
                        <AddPhotosButton>
                          <MdAddAPhoto size="35" />
                          <p>Somente JPG ou PNG</p>
                        </AddPhotosButton>
                      </Tooltip>
                    </div>
                  </div>

                  {/* <TextField
                    label="URL img"
                    placeholder="URL img"
                    value={newVehicle.imgs}
                    onChange={(event) => {
                      setNewVehicle({
                        ...newVehicle,
                        imgs: [event.target.value],
                      });
                    }}
                  /> */}

                  <DialogActions>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      type="submit"
                      onClick={handleClose}
                    >
                      Cadastrar
                    </Button>
                  </DialogActions>
                </FormContainer>
              </DialogContent>
            </Dialog>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => logout()}
            >
              Sair
            </Button>
          </div>
          <VehiclesListComponent vehicles={vehicles} />
        </StyledAdminPainel>
      )}
    </Fragment>
  );
};

export default AdminPainel;
