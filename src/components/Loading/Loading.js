import React from "react";

import { Container, Spinner } from "./styles";

export default function Loading({ size = 32, color = "black" }) {
  return (
    <Container>
      <Spinner size={size} color={color} />
    </Container>
  );
}
