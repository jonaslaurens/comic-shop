import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import CartItem from '../components/CartItem';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';

import { useComicStore } from '../store/globalState';
import { calculateTotal } from '../utils/calculateTotal';
import { formatMoney } from '../utils/formatMoney';

import 'react-toastify/dist/ReactToastify.css';
import {
  CartContentStyles,
  CartDetailsStyles,
  CartItemsStyles,
} from '../styles/CartStyles';

const EmptyCartStyles = styled.div`
  width: 100%;
  height: calc(100vh - 280px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 762px) {
    min-height: calc(100vh - 66px - 80px);
  }

  a {
    font-size: inherit;
  }
`;

const Cart = () => {
  const cart = useComicStore((state) => state.cart);

  if (cart.length === 0) {
    return (
      <Container>
        <EmptyCartStyles>
          <h2>
            No items here, go and get{' '}
            <Link to="/publishers" className="tilt">
              some
            </Link>
          </h2>
        </EmptyCartStyles>
      </Container>
    );
  }

  return (
    <Container>
      <CartContentStyles>
        <CartItemsStyles>
          {cart.map((item, index) => (
            <>
              <CartItem
                key={`${item.id}${index}`}
                title={item.title}
                image={item.images[0]}
                serie={item.serie}
                number={item.number}
                price={item.price}
                id={item.id}
              />
              <hr />
            </>
          ))}
        </CartItemsStyles>
        <CartDetailsStyles>
          <div>
            <h3>Total amount of comics: {cart.length}</h3>
            <p>
              For a total of
              <strong>{` ${formatMoney(calculateTotal(cart))}`}</strong>
            </p>
            <p>
              Enter your details below and I'll get back to you as soon as
              posible
            </p>
          </div>
          <ContactForm />
        </CartDetailsStyles>
      </CartContentStyles>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </Container>
  );
};

export default Cart;
