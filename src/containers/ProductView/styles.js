import styled from "styled-components";

import { DefaultDiscountTag } from "../../styles/defaultComponents";

import { device, sizes, colors } from "../../styles/stylesConsts";

export const Container = styled.section`
  padding: 80px 20px;
  max-width: ${sizes.maxLarge}; /*1100px*/
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.medium} {
    flex-direction: row;
  }
`;

export const DiscountTag = styled(DefaultDiscountTag)`
  bottom: 0;
  left: 0;
`;

export const ProductInfo = styled.form``;

export const ProductTitle = styled.h2`
  color: ${colors.veryDarkGray};
  margin: 14px 0;
`;

export const ProductPrice = styled.span``;

export const ProductInstallments = styled.span``;

export const Sizes = styled.div``;

export const ProductSize = styled.button``;

export const AddToCartBtn = styled.button``;
