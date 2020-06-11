import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../store/modules/cart/actions";

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

import imgNotAvailable from "../../assets/images/imgNaoDisponivel.png";

import { DefaultImgWrapper } from "../../styles/defaultComponents";

function ProductPage({ addItem }) {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [productSize, setProductSize] = useState("");
  const [sizeError, setSizeError] = useState(false);

  // Load product from API
  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(
        `https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog?search=${name}`
      );
      setProduct(response.data[0]);
    }

    fetchProduct();
  }, [name]);

  // Add item to cart
  function handleAddItem(e) {
    e.preventDefault();

    if (productSize) {
      const productToCart = {
        name: product.name,
        color: product.color,
        actual_price: product.actual_price,
        installments: product.installments,
        image: product.image,
        size: productSize,
        amount: 1,
      };
      addItem(productToCart);
    } else {
      setSizeError(true);
      setTimeout(() => {
        setSizeError(false);
      }, 3000);
    }
  }

  // Handle Selected Size
  function handleSelectedSize(e) {
    setProductSize(e.target.value);
  }

  return product.name ? (
    <Container>
      <DefaultImgWrapper>
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <img src={imgNotAvailable} alt={product.name} />
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
              (size) =>
                size.available && (
                  <ProductSize
                    value={size.size}
                    type="button"
                    onClick={handleSelectedSize}
                    key={size.size}
                  >
                    {size.size}
                  </ProductSize>
                )
            )}
          </div>
        </Sizes>

        {sizeError && <p>Por favor escolha um tamanho</p>}

        <AddToCartBtn onClick={handleAddItem} type="submit">
          Adicionar ao carrinho
        </AddToCartBtn>
      </ProductInfo>
    </Container>
  ) : null;
}

export default connect(null, { addItem })(ProductPage);
