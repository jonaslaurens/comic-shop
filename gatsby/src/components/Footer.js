import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  position: relative;

  @media (min-width: 800px) {
    flex-direction: row;
    height: 50px;
  }

  p {
    padding: 5px 0;
    margin: 0 20px;
  }
`;

const Footer = () => (
  <FooterStyles>
    <a href="https://jolau.be/" rel="noopener noreferrer" target="_blank">
      JoLau &copy; {new Date().getFullYear()}{' '}
    </a>
  </FooterStyles>
);

export default Footer;
