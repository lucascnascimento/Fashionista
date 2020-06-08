import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { closeSidebar } from "../../store/modules/sidebar/actions";
import { removeItem } from "../../store/modules/cart/actions";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { FiArrowRight } from "react-icons/fi";
import Backdrop from "../../components/Backdrop";
import ProductDrawer from "../../components/ProductDrawer";

import { SidebarContainer, Header, Footer } from "./styles";

function Sidebar({
  caller,
  closeSidebar,
  mCart,
  formattedPrice,
  removeItem,
  numOfitems,
}) {
  const [productsList, setProductsList] = useState([]);
  const [searchField, setSearchField] = useState("");

  // Handle sidebar close action
  function handleClose() {
    closeSidebar(null);
  }

  // Handle search input
  function handleSearch(e) {
    const searchField = e.target.value;
    setSearchField(searchField);
  }

  // Searches the user input
  useEffect(() => {
    async function searchProducts() {
      const response = await api.get();
      const filteredResults = response.data.filter((item) =>
        item.name.toLowerCase().includes(searchField.toLowerCase())
      );
      setProductsList(filteredResults);
    }

    searchField && searchProducts();
  }, [searchField]);

  return (
    <>
      <Backdrop handleClick={handleClose} />
      <SidebarContainer>
        <Header>
          <button onClick={handleClose}>
            <FiArrowRight size={24} color="black" />
          </button>
          <h3>
            {caller === "CART" ? `Sacola (${numOfitems})` : "Buscar Produtos"}
          </h3>
        </Header>

        {caller === "SEARCH" && (
          <input
            type="search"
            onChange={handleSearch}
            value={searchField}
          ></input>
        )}

        {caller === "CART" &&
          mCart.length > 0 &&
          mCart.map((item) => (
            <ProductDrawer item={item} caller="CART" removeItem={removeItem} />
          ))}

        {caller === "SEARCH" &&
          productsList.length > 0 &&
          productsList.map((item) => (
            <Link to={`/product/${item.name}`}>
              <ProductDrawer item={item} caller="SEARCH" />
            </Link>
          ))}

        {caller === "CART" && (
          <Footer>
            <span>Subtotal - {formattedPrice}</span>
          </Footer>
        )}
      </SidebarContainer>
    </>
  );
}

const mapDispatchToProps = { closeSidebar, removeItem };

const mapStateToProps = (state) => {
  const { cart } = state;

  const mCart = cart.map((item) => {
    const priceNumber = Number(
      item.actual_price.replace(",", ".").split(" ")[1]
    );
    return { ...item, priceNumber };
  });

  const priceSum = mCart.reduce((acc, item) => {
    return acc + item.priceNumber * item.amount;
  }, 0);

  const formattedPrice = new Intl.NumberFormat("br-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceSum);

  const numOfitems = mCart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return { mCart, formattedPrice, numOfitems };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
