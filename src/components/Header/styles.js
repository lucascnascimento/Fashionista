import styled from "styled-components";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "@styled-icons/material";

import { device, grayColors } from "../../styles/stylesConsts"; // shadesOfDarkReddishBrown

export const Topbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 20px 0;
  background: ${(props) => (props.isBackground ? "white" : "transparent")};
  transition: background 0.4s ease-out;
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
  color: black;
  font-family: Julius Sans One, sans-serif;
  font-size: 30px;
  font-weight: 500;

  &:hover {
    color: ${grayColors.veryDarkGray};
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
    color: black;

    & span {
      display: none;

      @media ${device.biggerThanMedium} {
        display: inline;
      }

      &:hover {
        color: ${grayColors.veryDarkGray};
      }
    }
  }
`;

export const MDSearch = styled(Search)`
  color: black;
  height: 18px;

  @media ${device.biggerThanMedium} {
    display: none;
  }

  &:hover {
    color: ${grayColors.veryDarkGray};
  }
`;

export const MDShoopingCart = styled(ShoppingCart)`
  color: black;
  height: 18px;

  @media ${device.biggerThanMedium} {
    display: none;
  }

  &:hover {
    color: ${grayColors.veryDarkGray};
  }
`;

export const ProductCounter = styled.div`
  background: red;
  color: white;
  height: 12px;
  width: 12px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  padding: 1px;
  vertical-align: middle;
  text-align: center;
  font-size: 0.7rem;

  @media ${device.biggerThanMedium} {
    display: none;
  }
`;
