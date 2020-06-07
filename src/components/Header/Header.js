import React from "react";
import { connect } from "react-redux";
import { openSidebar } from "../../store/modules/sidebar/actions";

import { MdSearch, MdShoppingCart } from "react-icons/md";
import { Container, Topbar, Logo, Menu, ProductCounter } from "./styles";

function Header({ openSidebar }) {
  return (
    <Topbar>
      <Container>
        <Logo to="/">FASHIONISTA</Logo>

        <Menu>
          <button
            onClick={() => {
              openSidebar("SEARCH");
            }}
          >
            <MdSearch size={24} color={"black"} />
          </button>
          <button
            onClick={() => {
              openSidebar("CART");
            }}
          >
            <MdShoppingCart size={24} color={"black"} c />
            <ProductCounter>3</ProductCounter>
          </button>
        </Menu>
      </Container>
    </Topbar>
  );
}

export default connect(null, { openSidebar })(Header);
