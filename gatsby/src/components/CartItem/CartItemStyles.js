import styled from 'styled-components';

export const CartItemStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px 0;
`;

export const CardImageStyles = styled.div`
  width: 150px;

  img {
    width: 100%;
  }
`;

export const DetailStyles = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 15px;
`;

export const CloseButtonStyles = styled.button`
  background: var(--red);
  color: var(--white);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 8px;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
`;
