import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { formatMoney } from '../utils/formatMoney';
import { CartContext } from '../store/cartStore';
import { useComicStore } from '../store/globalState';

const CartItemStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px 0;
`;

const CardImageStyles = styled.div`
  width: 150px;

  img {
    width: 100%;
  }
`;

const DetailStyles = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 15px;
`;

const CloseButtonStyles = styled.button`
  background: var(--red);
  color: var(--white);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 8px;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
`;

const CartItem = ({ image, title, serie, number, price, id }) => {
  const { removeComicFromCart } = useComicStore((state) => state);

  return (
    <CartItemStyles>
      <CardImageStyles>
        <GatsbyImage image={getImage(image.asset)} alt="hello" />
      </CardImageStyles>
      <DetailStyles>
        <p>
          {serie.title} #{number}
        </p>
        <p>{title}</p>
        <p>{formatMoney(price)}</p>
      </DetailStyles>
      <CloseButtonStyles onClick={() => removeComicFromCart(id)}>
        <VscClose />
      </CloseButtonStyles>
    </CartItemStyles>
  );
};

export default CartItem;
