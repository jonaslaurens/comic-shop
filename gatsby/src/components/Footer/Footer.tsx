import { Link } from 'gatsby';
import React from 'react';
import { FooterStyles, GradeLinkStyles } from './FooterStyles';

const Footer = () => (
  <FooterStyles>
    <a href="https://jolau.be/" rel="noopener noreferrer" target="_blank">
      JoLau &copy; {new Date().getFullYear()}{' '}
    </a>
    <Link to="/disclaimer">Disclaimer and Terms</Link>
    <GradeLinkStyles
      href="https://comic-grading-for-everyone.netlify.app/"
      rel="noopener noreferrer"
      target="_blank"
    >
      Grade Your Comic
    </GradeLinkStyles>
  </FooterStyles>
);

export default Footer;
