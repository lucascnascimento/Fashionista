import styled from "styled-components";
import { colors } from "../../styles/stylesConsts";

export const Container = styled.div``;

export const SidebarContainer = styled.div`
  z-index: 200;

  height: 100vh;
  background: white;
  box-shadow: -5px 0px 7px 1px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 8px 12px 8px;
  border-bottom: 1px solid #ccc;

  button {
    background: transparent;
    border: none;
  }

  h3 {
    font-weight: 600;
    margin: auto;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 12px 8px 12px 8px;
  background: ${colors.darkGray};
  color: white;
`;
