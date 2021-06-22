import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
