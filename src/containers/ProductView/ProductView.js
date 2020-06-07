import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import {
  Container,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductInstallments,
  Sizes,
  ProductSize,
  AddToCartBtn,
  DiscountTag,
} from "./styles";

import img from "../../assets/images/imgNaoDisponivel.png";

import { DefaultImgWrapper } from "../../styles/defaultComponents";

function ProductView() {
  const { name } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(
        `https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog?search=${name}`
      );
      setProduct(response.data[0]);
    }

    fetchUser();
  }, [name]);

  return product.name ? (
    <Container>
      <DefaultImgWrapper>
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <img src={img} alt={product.name} />
        )}
        <DiscountTag>{product.discount_percentage}</DiscountTag>
      </DefaultImgWrapper>

      <ProductInfo>
        <ProductTitle>{product.name} </ProductTitle>
        <ProductPrice>
          {product.actual_price}
          <ProductInstallments>
            {" "}
            em até {product.installments}{" "}
          </ProductInstallments>
        </ProductPrice>

        <Sizes>
          <span>Escolha o tamanho</span>
          <div>
            {product.sizes.map(
              (size) => size.available && <ProductSize>{size.size}</ProductSize>
            )}
          </div>
        </Sizes>
        <AddToCartBtn>Adicionar ao carrinho</AddToCartBtn>
      </ProductInfo>
    </Container>
  ) : null;
}

export default ProductView;

const mockProduct = {
  actual_price: "R$ 149,90",
  code_color: "20002581_614",
  color: "MINI FOLK",
  color_slug: "mini-folk",
  discount_percentage: "-23%",
  image:
    "https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_614_catalog_1.jpg",
  installments: "3x R$ 49,97",
  name: "BATA DECOTE FLUID",
  on_sale: false,
  regular_price: "R$ 149,90",
  sizes: [
    { available: true, size: "PP", sku: "5723_40130843_0_PP" },
    { available: true, size: "P", sku: "5723_40130843_0_P" },
    { available: true, size: "M", sku: "5723_40130843_0_M" },
    { available: true, size: "G", sku: "5723_40130843_0_G" },
    { available: true, size: "GG", sku: "5723_40130843_0_GG" },
  ],
  style: "20002581",
};
