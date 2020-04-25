import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { PreLoaderContainer } from "./style";

const PreLoader = () => {
  return (
    <PreLoaderContainer>
      <CircularProgress />
    </PreLoaderContainer>
  );
};

export default PreLoader;
