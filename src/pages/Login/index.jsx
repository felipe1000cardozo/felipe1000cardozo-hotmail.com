import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import { LoginBox } from "./styles";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    history.push("/admin");
  };

  return (
    <LoginBox>
      <form onSubmit={(event) => handleLogin(event)}>
        <TextField
          label="Login"
          placeholder="Login"
          type="email"
          value={login}
          onChange={(event) => {
            setLogin(event.target.value);
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

export default Login;
