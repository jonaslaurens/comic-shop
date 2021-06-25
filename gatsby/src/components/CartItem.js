import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { formatMoney } from '../utils/formatMoney';

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

const CartItem = ({ image, title, serie, number, price }) => (
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
  </CartItemStyles>
);

export default CartItem;
