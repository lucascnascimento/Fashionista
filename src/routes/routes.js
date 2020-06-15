import { Switch, Route } from "react-router-dom";
import React from "react";

import ProductList from "../containers/ProductList";
import ProductPage from "../containers/ProductPage";
import HomePage from "../containers/HomePage";

const routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/product/:name">
      <ProductPage />
    </Route>
  </Switch>
);

export default routes;
