import React, { createContext, useState } from 'react';

const defaultState = {
  cart: [],
};

export const CartContext = createContext(defaultState);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((oldCart) => [...oldCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
