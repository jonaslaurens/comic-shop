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
  }
`;

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/series">Series</Link>
  </NavStyles>
);

export default Nav;
