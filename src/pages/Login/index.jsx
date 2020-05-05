import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import firebase from "../../firebase";
import "firebase/auth";
import { LoginBox } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (firebase.getCurrent()) {
      return history.replace("/admin");
    }
    // eslint-disable-next-line
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  // useEffect(() => {
  //   console.log(firebase.getCurrent());
  //   // if (!firebase.getCurrent()) {
  //   //   //props.history.replace("/login");
  //   //   return null;
  //   // }

  //   // firebase.getUserName(info => {
  //   //   localStorage.userName = info.val().nome;
  //   //   setNome(localStorage.userName);
  //   // });
  // }, []);

  // async function login() {
  //   try {
  //     await firebase.login(email, password).catch((error) => {
  //       if (error.code === "auth/user-not-found") {
  //         alert("Este usuario não exite!");
  //       } else {
  //         alert("Codigo de erro:" + error.code);
  //         return null;
  //       }
  //     });
  //     history.replace("/admin");
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.message);
  //   }
  // }

  async function login() {
    try {
      await firebase.login(email, password).catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("Este usuario não exite!");
        } else {
          alert("Codigo de erro:" + error.code);
          return null;
        }
      });
      history.replace("/admin");
    } catch (error) {
      alert(error.message);
    }
  }

  function sair() {
    firebase.auth().signOut();
    alert("Deslogado com sucesso!");
  }
  return (
    <LoginBox>
      <form onSubmit={(event) => handleLogin(event)}>
        <TextField
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          label="Senha"
          placeholder="Senha"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </LoginBox>
  );
};

export default withRouter(Login);
