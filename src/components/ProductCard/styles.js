import styled from "styled-components";
import { Link } from "react-router-dom";

import { grayColors, device } from "../../styles/stylesConsts";

import {
  DefaultDiscountTag,
  DefaultImgWrapper,
} from "../../styles/defaultComponents";

export const Card = styled(Link)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  .card__name {
    padding: 5px 5px 0;
    color: black;
    text-align: center;
  }
`;

export const ShowProduct = styled.span`
  border: 1px solid white;
  border-radius: 3px;
  display: none;
  position: absolute;
  color: white;
  padding: 4px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;

  font-size: 2vw;
  padding: 8px;

  @media ${device.biggerThanMedium} {
    font-size: 1.4vw;
  }

  @media ${device.biggerThanLarge} {
    font-size: 1vw;
  }
`;

export const ImgWrapper = styled(DefaultImgWrapper)`
  img {
    filter: brightness(100%);
  }

  &:hover {
    img {
      filter: brightness(40%);
      transition: filter 0.2s linear;
    }

    & ${ShowProduct} {
      display: block;
    }
  }
`;

export const DiscountTag = styled(DefaultDiscountTag)`
  top: 0;
  right: 0;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: auto;
  padding: 2px 0;
`;

export const RegularPrice = styled.span`
  display: ${(props) => (props.hasDiscount ? "inline-block" : "none")};
  color: blue;
  font-size: 1rem;
  color: ${grayColors.mediumGray};
  text-decoration: line-through;
  padding: 0 5px 0;
`;

export const ActualPrice = styled.span`
  color: ${grayColors.veryDarkGray};
  font-size: 1rem;
  padding: 0 5px 0;
`;
