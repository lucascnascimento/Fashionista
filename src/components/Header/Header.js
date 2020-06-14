import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { openSidebar } from "../../store/modules/sidebar/actions";

import {
  Container,
  Topbar,
  Logo,
  Menu,
  ProductCounter,
  MDSearch,
  MDShoopingCart,
} from "./styles";

function Header({ openSidebar, numOfitems }) {
  const [isBackground, setIsBackground] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setIsBackground(true);
      } else {
        setIsBackground(false);
      }
    };
  }, []);

  return (
    <Topbar isBackground={isBackground}>
      <Container>
        <Logo to="/">Fashionista</Logo>

        <Menu>
          <button
            onClick={() => {
              openSidebar("SEARCH");
            }}
          >
            <MDSearch />
            <span>PESQUISAR</span>
          </button>
          <button
            onClick={() => {
              openSidebar("CART");
            }}
          >
            <MDShoopingCart />
            {numOfitems > 0 && <ProductCounter>{numOfitems}</ProductCounter>}
            <span>MEU CARRINHO ({numOfitems})</span>
          </button>
        </Menu>
      </Container>
    </Topbar>
  );
}

const mapStateToProps = (state) => {
  const { cart } = state;

  const numOfitems = cart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return { numOfitems };
};

export default connect(mapStateToProps, { openSidebar })(Header);
