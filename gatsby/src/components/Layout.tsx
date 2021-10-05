/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer/Footer';
import { LayoutProps } from '../types';
import Nav from './Navbar/Nav';

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
