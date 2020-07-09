import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../store/modules/products/actions";

import img from "../../assets/images/imgNaoDisponivel.png";

import {
  Card,
  DiscountTag,
  RegularPrice,
  ActualPrice,
  ImgWrapper,
  PriceWrapper,
  ShowProduct,
} from "./styles";

function ProductCard({ data }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setCurrentProduct(data));
  }

  return (
    <Card to={`/product/${data.name}`} onClick={handleClick}>
      <ImgWrapper>
        {data.image ? (
          <img src={data.image} alt={data.name} />
        ) : (
          <img src={img} alt={data.name} />
        )}
        <ShowProduct>Ver Produto</ShowProduct>
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
