import { SET_CURRENT_PRODUCT, LOAD_PRODUCTS_LIST } from "../constants";

const initialState = {
  products: {},
  currentProduct: {},
};

function products(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST: {
      const productList = action.payload;

      return { ...state, products: productList };
    }

    case SET_CURRENT_PRODUCT: {
      const product = action.payload;

      const currentProduct = state.find((p) => p.name === product);

      return { ...state, currentProduct };
    }

    default:
      break;
  }
}

export default products;
