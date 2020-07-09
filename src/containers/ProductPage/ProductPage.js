import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../store/modules/cart/actions";

import Loading from "../../components/Loading";

import {
  Container,
  ImgWrapper,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductInstallments,
  Sizes,
  ProductSize,
  AddToCartBtn,
  DiscountTag,
  Error,
  BackToHome,
} from "./styles";

import imgNotAvailable from "../../assets/images/imgNaoDisponivel.png";

import { ArrowBack } from "@styled-icons/material";

function ProductPage({ addItem, currentProduct }) {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [productSize, setProductSize] = useState("");
  const [sizeError, setSizeError] = useState(false);

  // Load product from API
  useEffect(() => {
    setProduct(currentProduct);
  }, [currentProduct]);

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
      <BackToHome to="/">
        <ArrowBack size={24} />
        <span>Voltar para a página principal</span>
      </BackToHome>

      <ImgWrapper>
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <img src={imgNotAvailable} alt={product.name} />
        )}
        <DiscountTag>{product.discount_percentage}</DiscountTag>
      </ImgWrapper>

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
          <span>Escolha o tamanho: </span>
          <div>
            {product.sizes.map(
              (size) =>
                size.available && (
                  <ProductSize
                    value={size.size}
                    type="button"
                    onClick={handleSelectedSize}
                    key={size.size}
                    className={productSize === size.size ? "active" : ""}
                  >
                    {size.size}
                  </ProductSize>
                )
            )}
          </div>
        </Sizes>

        {sizeError && <Error>Por favor escolha um tamanho</Error>}

        <AddToCartBtn onClick={handleAddItem} type="submit">
          Adicionar ao carrinho
        </AddToCartBtn>
      </ProductInfo>
    </Container>
  ) : (
    <Loading />
  );
}

const mapStateToProps = (state) => ({
  currentProduct: state.products.currentProduct,
});

export default connect(mapStateToProps, { addItem })(ProductPage);
