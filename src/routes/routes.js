import { Switch, Route } from "react-router-dom";
import React from "react";

import ProductList from "../containers/ProductList";
import ProductView from "../containers/ProductView";

const routes = () => (
  <Switch>
    <Route exact path="/">
      <ProductList />
    </Route>
    <Route path="/product/:name">
      <ProductView />
    </Route>
  </Switch>
);

export default routes;
