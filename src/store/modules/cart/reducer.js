import { ADD_ITEM, REMOVE_ITEM } from "../constants";

function cart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM: {
      const itemIndex = state.findIndex(
        (product) =>
          product.name === action.item.name && product.size === action.item.size
      );

      if (itemIndex > -1) {
        return state.map((product) => {
          if (
            product.name === action.item.name &&
            product.size === action.item.size
          ) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
      }

      return [...state, action.item];
    }

    case REMOVE_ITEM: {
      const itemIndex = state.findIndex(
        (product) =>
          product.name === action.item.name && product.size === action.item.size
      );

      return state.splice(itemIndex, 1);
    }

    default:
      return state;
  }
}

export default cart;
