import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const DisclaimerStyles = styled.main``;

const disclaimer = () => (
  <Container>
    <DisclaimerStyles>
      <h1>Disclaimer / Warning</h1>
      <h2>This is not a webshop!</h2>
      <p>
        You can buy all comics you see on here.. But there is no direct buy
        option. All purchases will be handled between the buyer ( you ) and me.
      </p>

      <hr />

      <h3>The buying process</h3>
      <p>
        After you send out what items you wish, the order will be reviewed by
        me. I will get back to you with all the necessary details and ask about
        your details (for shipping etc.).
      </p>
      <p>
        After we have an agreement about the order you will send out the payment
        and I will send out the comics as soon as the payment is recieved
      </p>
    </DisclaimerStyles>
  </Container>
);

export default disclaimer;
