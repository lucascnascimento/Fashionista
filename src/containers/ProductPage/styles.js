import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  DefaultDiscountTag,
  DefaultImgWrapper,
} from "../../styles/defaultComponents";

import { device, sizes, grayColors } from "../../styles/stylesConsts";

export const Container = styled.section`
  padding: 72px 20px;
  max-width: ${sizes.maxLarge}; /*1100px*/
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${device.biggerThanMedium} {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

export const BackToHome = styled(Link)`
  display: block;
  padding: 8px 0px;
  color: black;
  text-decoration: none;

  & span {
    padding: 0px 8px;
    text-transform: uppercase;
  }

  @media ${device.biggerThanMedium} {
    width: 100%;
  }
`;

export const DiscountTag = styled(DefaultDiscountTag)`
  bottom: 0;
  left: 0;
`;

export const ImgWrapper = styled(DefaultImgWrapper)`
  @media ${device.biggerThanMedium} {
    flex: 1 1 50%;
    max-width: 400px;
    padding: 0 40px;
  }
`;

export const ProductInfo = styled.form`
  @media ${device.biggerThanMedium} {
    flex: 1 1 50%;
    max-width: 400px;
    padding: 0 40px;
  }
`;

export const ProductTitle = styled.h2`
  color: black;
  margin: 8px 0;

  text-align: center;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  padding: 4px 0;
  display: inline-block;
`;

export const ProductInstallments = styled.span`
  padding: 0px 4px;
`;

export const Sizes = styled.div`
  & > span {
    font-size: 14px;
    padding: 4px 0 0 0;
    display: inline-block;
  }

  & div {
    padding: 8px;
    display: flex;
    justify-content: center;
  }
`;

export const ProductSize = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  font-size: 1rem;
  padding: 8px;
  margin: 8px;
  border: 2px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${grayColors.lineGray};
  }

  &.active {
    background: ${grayColors.lineGray};
  }
`;

export const AddToCartBtn = styled.button`
  background: black;
  color: white;
  font-size: 18px;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 1rem;
  padding: 4px 0px;
`;
