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
} from "./styles";

function ProductDrawer({ item, caller, removeItem }) {
  return (
    <ProductDrawerCard>
      <CardMain>
        <img src={item.image} alt={item.name} />
        <CardGrid>
          <CardTitle>{item.name}</CardTitle>
          <CardSize>Tam.: {item.size}</CardSize>
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
