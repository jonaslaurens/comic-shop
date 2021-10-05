import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 100%;
  height: auto;
  border-bottom: 2px var(--grey) solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 30px;
  height: 200px;

  @media (min-width: 762px) {
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    font-size: 3rem;
    margin: 0 40px;
    --rotate: -3deg;
    transform: rotate(var(--rotate));
    order: 1;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      --rotate: 6deg;
    }
  }
`;

export { NavStyles };
