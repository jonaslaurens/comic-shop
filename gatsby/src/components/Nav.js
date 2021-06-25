import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import Cart from './Cart';

const NavStyles = styled.nav`
  width: 100%;
  height: 64px;
  border-bottom: 2px var(--grey) solid;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 3rem;
    margin: 0 40px;
    --rotate: -3deg;
    transform: rotate(var(--rotate));
    order: 1;
    transition: 0.3s;

    &:hover {
      --rotate: 6deg;
    }
  }
`;

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/publishers">Publishers</Link>
    <Link to="/cart">
      <Cart />
    </Link>
    <a
      href="/comicgradingforeveryone"
      rel="noopener noreferrer"
      target="_blank"
    >
      Grade Your Comic
    </a>
  </NavStyles>
);

export default Nav;
