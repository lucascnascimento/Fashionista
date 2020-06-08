import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../constants";

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

      const newState = [...state];

      newState.splice(itemIndex, 1);

      return newState;
    }

    case INCREMENT_ITEM: {
      const itemIndex = state.findIndex(
        (product) =>
          product.name === action.name && product.size === action.size
      );

      if (itemIndex > -1) {
        return state.map((product) => {
          if (product.name === action.name && product.size === action.size) {
            return { ...product, amount: action.amount };
          }
          return product;
        });
      }

      return state;
    }

    case DECREMENT_ITEM: {
      if (action.amount < 1) return state;

      const itemIndex = state.findIndex(
        (product) =>
          product.name === action.name && product.size === action.size
      );

      if (itemIndex > -1) {
        return state.map((product) => {
          if (product.name === action.name && product.size === action.size) {
            return { ...product, amount: action.amount };
          }
          return product;
        });
      }

      return state;
    }

    default:
      return state;
  }
}

export default cart;
