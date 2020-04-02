import React from "react";

import { Button } from "./styles";

const ButtonComponent = ({ value, onClick }) => {
  return <Button onClick={onClick}>{value}</Button>;
};

export default ButtonComponent;
