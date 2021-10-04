import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import { VscClose } from 'react-icons/vsc';
import { formatMoney } from '../../utils/formatMoney';
import { useComicStore } from '../../store/globalState';
import {
  CardImageStyles,
  CartItemStyles,
  CloseButtonStyles,
  DetailStyles,
} from './CartItemStyles';

interface Props {
  image?: any;
  title?: string;
  serie?: any;
  number?: number;
  price?: number;
  id?: string;
}

const CartItem: FC<Props> = ({ image, title, serie, number, price, id }) => {
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
