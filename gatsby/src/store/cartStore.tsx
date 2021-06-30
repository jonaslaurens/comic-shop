import React, { createContext, useState, FC } from 'react';

interface IComic {
  id: string;
  _id: string;
  title: string;
  number: number;
}

type ContextType = {
  cart: IComic[];
  addComic: (comic: IComic) => void;
  removeItem: (id: string) => void;
};

const contextDefaultValues: ContextType = {
  cart: [],
  addComic: () => {},
  removeItem: () => {},
};

export const CartContext = createContext<ContextType>(contextDefaultValues);

export const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<IComic[]>(contextDefaultValues.cart);

  const addComic = async (item: IComic) => {
    // add comic to cart
    setCart((oldCart) => [...oldCart, item]);
  };

  const removeItem = (comicId: string) => {
    // find index
    const index = cart.findIndex((comic) => comic.id === comicId);
    // remove index from cart
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  return (
    <CartContext.Provider value={{ cart, addComic, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
