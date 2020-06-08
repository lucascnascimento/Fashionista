import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../constants";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item,
  };
}

export function incrementItem(name, size, amount) {
  return {
    type: INCREMENT_ITEM,
    name,
    size,
    amount,
  };
}

export function decrementItem(name, size, amount) {
  return {
    type: DECREMENT_ITEM,
    name,
    size,
    amount,
  };
}
