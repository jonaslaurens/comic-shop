import styled from 'styled-components';

export const CartStyles = styled.div`
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
    font-size: 0.8em;
    top: -5px;
    right: -5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
