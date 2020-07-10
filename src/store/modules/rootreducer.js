import { combineReducers } from "redux";

import cart from "./cart/reducer";
import sidebar from "./sidebar/reducer";

export default combineReducers({ cart, sidebar });
