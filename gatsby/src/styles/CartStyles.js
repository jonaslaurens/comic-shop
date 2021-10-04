import styled from 'styled-components';

const CartContentStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  padding-top: 30px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
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

export {
  CartContentStyles,
  CartItemsStyles,
  CartDetailsStyles,
  EmptyCartStyles,
};
