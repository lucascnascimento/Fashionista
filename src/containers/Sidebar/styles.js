import styled from "styled-components";
import { device, grayColors } from "../../styles/stylesConsts";

export const Container = styled.div``;

export const SidebarContainer = styled.div`
  z-index: 200;

  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: -5px 0px 7px 1px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;

  @media ${device.biggerThanMedium} {
    max-width: 70%;
  }

  @media ${device.biggerThanLarge} {
    max-width: 35%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 8px 12px 8px;
  border-bottom: 1px solid ${grayColors.lineGray};

  button {
    background: transparent;
    border: none;
  }

  h3 {
    font-weight: 600;
    margin: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px #ccc solid;

  -webkit-appearance: none;
`;

export const ProductDisplay = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const Footer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 8px 12px 8px;
  background: ${grayColors.darkGray};
  color: white;

  & span {
    font-size: 1rem;
  }
`;
