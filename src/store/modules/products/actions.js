import { LOAD_PRODUCTS_LIST, SET_CURRENT_PRODUCT } from "../constants";

export function loadProducts(products) {
  return {
    type: LOAD_PRODUCTS_LIST,
    payload: products,
  };
}

export function setCurrentProduct(productData) {
  return {
    type: SET_CURRENT_PRODUCT,
    payload: productData,
  };
}
