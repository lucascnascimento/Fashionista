import styled from "styled-components";
import { Link } from "react-router-dom";

import { DefaultDiscountTag } from "../../styles/defaultComponents";

export const Card = styled(Link)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  .card__name {
    padding: 10px 5px 0;
    font-weight: bold;
    color: #444;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  position: relative;

  img {
    width: 100%;
  }
`;

export const DiscountTag = styled(DefaultDiscountTag)`
  top: 0;
  right: 0;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 5px 0;
`;

export const RegularPrice = styled.span`
  display: ${(props) => (props.hasDiscount ? "inline-block" : "none")};
  color: blue;
  font-size: 12px;
  color: #888;
  text-decoration: line-through;
  padding: 0 5px;
`;

export const ActualPrice = styled.span`
  color: #222;
  padding: 0 5px;
`;
