import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';
import { useComicStore } from '../store/globalState';

const CartStyles = styled.div`
  position: relative;
  width: 50px;

  span {
    position: absolute;
    background: var(--red);
    color: var(--white);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    padding: 8px;
    font-size: 0.5em;
    top: -5px;
    right: -5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Cart = () => {
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

export default Cart;