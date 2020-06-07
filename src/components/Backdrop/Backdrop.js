import React from "react";

import { BackdropScreen } from "./styles";

function Backdrop({ handleClick }) {
  return <BackdropScreen onClick={handleClick} />;
}

export default Backdrop;
