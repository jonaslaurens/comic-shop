/* eslint-disable import/no-unresolved */
import { Link } from 'gatsby';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import CartItem from '../components/CartItem/CartItem';

import { useComicStore } from '../store/globalState';
import { calculateTotal } from '../utils/calculateTotal';
import { formatMoney } from '../utils/formatMoney';

import 'react-toastify/dist/ReactToastify.css';
import {
  CartContentStyles,
  CartDetailsStyles,
  CartItemsStyles,
  EmptyCartStyles,
} from '../styles/CartStyles';
import ContactForm from '../components/ContactForm/ContactForm';
import Container from '../components/Container/Container';

const Cart = () => {
  const cart = useComicStore((state) => state.cart);

  return (
    <Container>
      {cart.length === 0 && (
        <EmptyCartStyles>
          <h2>
            No items here, go and get{' '}
            <Link to="/publishers" className="tilt">
              some
            </Link>
          </h2>
        </EmptyCartStyles>
      )}

      <CartContentStyles>
        <CartItemsStyles>
          {cart.map((item, index) => (
            <React.Fragment key={item.id}>
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
            </React.Fragment>
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
