import React from "react";

import img from "../../assets/images/imgNaoDisponivel.png";

import {
  Card,
  DiscountTag,
  RegularPrice,
  ActualPrice,
  ImgWrapper,
  PriceWrapper,
} from "./styles";

function ProductCard({ data }) {
  return (
    <Card>
      <ImgWrapper>
        {data.image ? (
          <img src={data.image} alt={data.name} />
        ) : (
          <img src={img} alt={data.name} />
        )}
        <DiscountTag hasDiscount={true}>-50%</DiscountTag>
      </ImgWrapper>
      <span className="card__name">{data.name}</span>
      <PriceWrapper>
        <RegularPrice hasDiscount={true}>{data.regular_price}</RegularPrice>
        <ActualPrice>{data.actual_price}</ActualPrice>
      </PriceWrapper>
    </Card>
  );
}

export default ProductCard;
