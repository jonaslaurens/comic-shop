import React, { useContext, useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';

import { CartContext } from '../store/cartStore';

const CartStyles = styled.div`
  position: relative;

  span {
    position: absolute;
    background: var(--red);
    color: var(--white);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    padding: 8px;
    font-size: 0.5em;
    top: -10px;
    right: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Cart = () => {
  const { cart } = useContext(CartContext);

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
