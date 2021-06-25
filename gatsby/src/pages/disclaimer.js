import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const DisclaimerStyles = styled.main`
  span {
    font-family: 'Bangers';
    font-size: inherit;
    color: var(--red);
  }

  p {
    padding: 15px 0;
  }
`;

const disclaimer = () => (
  <Container>
    <DisclaimerStyles>
      <h1>Disclaimer / Warning</h1>
      <h2>
        This is <span>not</span> a webshop!
      </h2>
      <p>
        You can buy all comics you see on here.. But there is no direct buy
        option. All orders will be handled between the buyer and me directly.
      </p>

      <hr />

      <h3>Example buying process</h3>
      <p>
        You found a comic you like and added it to your cart. After filling out
        the form, I will recieve your order and will review it. Soon, after
        reviewing your order, You will recieve an email from me answering any
        question you might have asked and asking some questions myself, like the
        necessary details where I need to send your order to.
      </p>
      <p>
        When we reach an agreement about your order and we both feel comfortable
        about the process, you will be asked to send out the payment. As soon as
        the payment is recieved I will send out your order, few days later, you
        will be the happy new owner of that one missing comic!
      </p>

      <hr />

      <h3>Shipping Your comic</h3>
      <p>
        I send out all comics with the best care I can give them. Bag and board,
        bigger piece of carboard around comic and bubble wrap around that to
        protect it even further. Depending on the amount, it will either be send
        in a mailer or a sturdy box.
      </p>
    </DisclaimerStyles>
  </Container>
);

export default disclaimer;
