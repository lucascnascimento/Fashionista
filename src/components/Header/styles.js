import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Topbar = styled.div`
  border-bottom: 1px solid #ccc;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 40px;
`;

export const Menu = styled.div`
  button {
    background: none;
    border: none;
    padding: 0 6px;
    cursor: pointer;
  }
`;

export const CountProduct = styled.div`
  background: red;
  color: #fff;
  height: 15px;
  width: 15px;
  position: absolute;
  z-index: 2;
  top: 40px;
  right: 32px;
`;
