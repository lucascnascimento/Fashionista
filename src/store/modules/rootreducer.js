import { combineReducers } from "redux";

import cart from "./cart/reducer";
import sidebar from "./sidebar/reducer";
import products from "./products/reducer";

export default combineReducers({ cart, sidebar, products });
