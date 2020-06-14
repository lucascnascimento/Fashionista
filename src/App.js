import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Sidebar from "./containers/Sidebar";
import Footer from "./components/Footer";

import Routes from "./routes/routes";

function App({ component }) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {component === "SEARCH" && <Sidebar caller={component} />}
      {component === "CART" && <Sidebar caller={component} />}
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  const { component } = state.sidebar;
  return { component };
};

export default connect(mapStateToProps)(App);
