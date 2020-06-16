import React from "react";

import Counter from "./Counter";

import {
  ProductDrawerCard,
  CardMain,
  CardGrid,
  CardTitle,
  CardSize,
  CardPrice,
  CardInstallments,
  RemoveButton,
  ImgWrapper,
} from "./styles";

import img from "../../assets/images/imgNaoDisponivel.png";

function ProductDrawer({ item, caller, removeItem }) {
  return (
    <ProductDrawerCard>
      <CardMain>
        <ImgWrapper>
          <img src={item.image || img} alt={item.name} />
        </ImgWrapper>
        <CardGrid>
          <CardTitle>{item.name}</CardTitle>

          {caller === "SEARCH" ? null : <CardSize>Tam.: {item.size}</CardSize>}
          {caller === "SEARCH" ? null : (
            <Counter amount={item.amount} name={item.name} size={item.size} />
          )}
          <CardPrice>{item.actual_price}</CardPrice>
          <CardInstallments>{item.installments}</CardInstallments>
        </CardGrid>
      </CardMain>

      {caller === "SEARCH" ? null : (
        <RemoveButton>
          <button onClick={() => removeItem(item)}>Remover Item</button>
        </RemoveButton>
      )}
    </ProductDrawerCard>
  );
}

export default ProductDrawer;
