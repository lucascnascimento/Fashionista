import React from "react";

import { MdSearch, MdShoppingCart } from "react-icons/md";
import { Container, Topbar, Logo, Menu, ProductCounter } from "./styles";

function Header() {
  return (
    <Topbar>
      <Container>
        <Logo to="/">FASHIONISTA</Logo>

        <Menu>
          <button>
            <MdSearch size={24} color={"black"} />
          </button>
          <button>
            <MdShoppingCart size={24} color={"black"} c />
            <ProductCounter>3</ProductCounter>
          </button>
        </Menu>
      </Container>
    </Topbar>
  );
}

export default Header;
