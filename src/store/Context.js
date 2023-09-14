import React, { createContext } from "react";

const Cart = createContext();

const Context = (props) => {
  return <Cart.Provider>{props.children}</Cart.Provider>;
};

export default Context;
