import React from "react";
import { StyledHeaderPageComponent } from "./styles";

const HeaderPageComponent = ({ title }) => {
  return (
    <StyledHeaderPageComponent>
      <h1>{title}</h1>
    </StyledHeaderPageComponent>
  );
};

export default HeaderPageComponent;
