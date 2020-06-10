import styled from "styled-components";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "@styled-icons/material";

import { device, Colors, grayColors } from "../../styles/stylesConsts"; // shadesOfDarkReddishBrown

export const Topbar = styled.div`
  border-bottom: 1px solid ${grayColors.lineGray};
  background: white;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px 20px;
  position: relative;

  @media ${device.biggerThanMedium} {
    position: static;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${Colors.color4};
  font-family: Julius Sans One, sans-serif;
  font-size: 30px;
  font-weight: 500;

  @media ${device.biggerThanMedium} {
    font-size: 60px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;

  @media ${device.biggerThanMedium} {
    position: static;
  }

  button {
    background: none;
    border: none;
    padding: 0 6px;
    cursor: pointer;
    position: relative;
  }
`;

export const MDSearch = styled(Search)`
  color: ${Colors.color4};
  height: 18px;

  @media ${device.biggerThanMedium} {
    height: 28px;
  }
`;

export const MDShoopingCart = styled(ShoppingCart)`
  color: ${Colors.color4};
  height: 18px;

  @media ${device.biggerThanMedium} {
    height: 28px;
  }
`;

export const ProductCounter = styled.div`
  background: ${Colors.color5};
  color: ${Colors.color2};
  height: 9px;
  width: 9px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  padding: 1px;
  vertical-align: middle;
  text-align: center;
  font-size: 0.5rem;

  @media ${device.biggerThanMedium} {
    height: 15px;
    width: 15px;
    font-size: 0.9rem;
  }
`;
