import React from "react";

import {
  ProductDrawerCard,
  CardMain,
  CardGrid,
  CardTitle,
  CardSize,
  CardAmount,
  CardPrice,
  CardInstallments,
  RemoveButton,
} from "./styles";

function ProductDrawer() {
  return (
    <ProductDrawerCard>
      <CardMain>
        <img
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
          alt=""
        />
        <CardGrid>
          <CardTitle>VESTIDO TRANSPASSE BOW</CardTitle>
          <CardSize>Tam.: G</CardSize>
          <CardAmount>2</CardAmount>
          <CardPrice>R$ 199,90</CardPrice>
          <CardInstallments>3x R$ 66,63</CardInstallments>
        </CardGrid>
      </CardMain>
      <RemoveButton>
        <button>Remover Item</button>
      </RemoveButton>
    </ProductDrawerCard>
  );
}

export default ProductDrawer;
