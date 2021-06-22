import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 100%;
  height: 64px;
  border-bottom: 2px var(--grey) solid;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 15px;
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
    <Link to="/series">Series</Link>
    <Link to="/publishers">Publishers</Link>
  </NavStyles>
);

export default Nav;