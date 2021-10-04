/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Typography from '../styles/Typography';
import Footer from './Footer';
import { LayoutProps } from '../types';

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
