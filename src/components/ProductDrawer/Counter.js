import React from "react";
import { connect } from "react-redux";
import { incrementItem, decrementItem } from "../../store/modules/cart/actions";
import { AddBox, IndeterminateCheckBox } from "@styled-icons/material";

import { CounterWrapper, PlusButton, MinusButton } from "./styles";

function Counter({ incrementItem, decrementItem, amount, name, size }) {
  function increment() {
    incrementItem(name, size, amount + 1);
  }

  function decrement() {
    decrementItem(name, size, amount - 1);
  }

  return (
    <CounterWrapper>
      <MinusButton
        type="button"
        onClick={() => {
          decrement();
        }}
      >
        <IndeterminateCheckBox />
      </MinusButton>
      <span>{amount}</span>
      <PlusButton
        type="button"
        onClick={() => {
          increment();
        }}
      >
        <AddBox />
      </PlusButton>
    </CounterWrapper>
  );
}

export default connect(null, { incrementItem, decrementItem })(Counter);
