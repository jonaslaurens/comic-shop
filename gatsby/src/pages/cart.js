import { Link } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';

import { CartContext } from '../store/cartStore';
import { calculateTotal } from '../utils/calculateTotal';
import { formatMoney } from '../utils/formatMoney';

const EmptyCartStyles = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: inherit;
  }
`;

const CartContentStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  padding-top: 30px;
`;

const CartItemsStyles = styled.div`
  width: 100%;
  max-height: 750px;
  overflow: hidden scroll;
`;

const CartDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 0.4em 0;
  }

  strong {
    font-size: 1em;
  }

  form {
    margin-top: 50px;
  }
`;

const Cart = () => {
  const { cart } = useContext(CartContext);

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
          {cart.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.images[0]}
              serie={item.serie}
              number={item.number}
              price={item.price}
              id={item.id}
            />
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
    </Container>
  );
};

export default Cart;
