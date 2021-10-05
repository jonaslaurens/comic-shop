/* eslint-disable import/no-unresolved */
import { Link } from 'gatsby';
import React from 'react';
import CartIcon from '../CartIcon/CartIcon';

import { NavStyles } from './NavStyles';

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/publishers">Publishers</Link>
    <Link to="/search">Search</Link>
    <Link to="/cart">
      <CartIcon />
    </Link>
  </NavStyles>
);

export default Nav;
