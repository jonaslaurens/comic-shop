import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useComicStore } from '../../store/globalState';
import { CartStyles } from './CartIconStyles';

const CartIcon = () => {
  const cart = useComicStore((state) => state.cart);

  if (cart.length === 0) {
    return <FiShoppingCart />;
  }

  return (
    <CartStyles>
      <FiShoppingCart />
      <span>{cart.length}</span>
    </CartStyles>
  );
};

export default CartIcon;
