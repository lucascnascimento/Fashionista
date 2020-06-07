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
    <Card to={`/product/${data.name}`}>
      <ImgWrapper>
        {data.image ? (
          <img src={data.image} alt={data.name} />
        ) : (
          <img src={img} alt={data.name} />
        )}
        <DiscountTag>{data.discount_percentage}</DiscountTag>
      </ImgWrapper>
      <span className="card__name">{data.name}</span>
      <PriceWrapper>
        <RegularPrice hasDiscount={data.discount_percentage}>
          {data.regular_price}
        </RegularPrice>
        <ActualPrice>{data.actual_price}</ActualPrice>
      </PriceWrapper>
    </Card>
  );
}

export default ProductCard;
