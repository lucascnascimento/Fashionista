import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Sidebar from "./containers/Sidebar";
import Backdrop from "./components/Backdrop";

import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {/* <Sidebar /> */}
      {/* <Backdrop /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
