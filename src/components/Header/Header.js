import React from "react";
import { connect } from "react-redux";
import { openSidebar } from "../../store/modules/sidebar/actions";

import { MdSearch, MdShoppingCart } from "react-icons/md";
import { Container, Topbar, Logo, Menu, ProductCounter } from "./styles";

function Header({ openSidebar, numOfitems }) {
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
            <MdShoppingCart size={24} color={"black"} />
            {numOfitems > 0 && <ProductCounter>{numOfitems}</ProductCounter>}
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
