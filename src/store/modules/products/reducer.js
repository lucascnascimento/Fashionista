import { SET_CURRENT_PRODUCT, LOAD_PRODUCTS_LIST } from "../constants";

const initialState = {
  products: [],
  currentProduct: null,
};

function products(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST: {
      const productList = action.payload;

      return { ...state, products: productList };
    }

    case SET_CURRENT_PRODUCT: {
      return { ...state, currentProduct: action.payload };
    }

    default:
      return state;
  }
}

export default products;
