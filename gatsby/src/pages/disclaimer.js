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
      <h1>Disclaimer and Terms</h1>
      <h2>
        This is <span>not</span> a full featured, superpowered, web slinging,
        time traveling webshop!
      </h2>
      <p>
        Just a fair warning.. You can buy all comics you see on here.. But there
        is <strong>no direct buy</strong> option. All orders are processed
        between the buyer and myself.
      </p>

      <hr />

      <h3>Example buying process</h3>
      <p>
        You found a comic you like and added it to your cart. After filling out
        the form, I will recieve your order and will review it. Soon, after
        reviewing your order, You will recieve an email where I answer any
        questions you might have asked and possibly getting some questions from
        myself, like the necessary details where I need to send your order to.
      </p>
      <p>
        When we reach an agreement about your order and we both feel comfortable
        about the process, you will be asked to send out the payment. As soon as
        the payment is recieved I will send out your order, few days later, you
        will be the happy new owner of that one or more missing comics!
      </p>

      <hr />

      <h3>Shipping Your comic</h3>
      <p>
        I send out all comics with the best care I can give them. Bag and board,
        bigger piece of carboard around comic and bubble wrap around that to
        protect it even further. Depending on the amount, it will either be send
        in a mailer or a sturdy box.
      </p>

      <hr />

      <h3>Ownership</h3>
      <p>
        All comics and characters have their own copyright through their
        "maker". HallofJusticeComicShop.com is just a website to sell my
        personal collection. All HallofJusticeComicShop.com claims to own is
        this website, the look and feel, and the individual functions that make
        your comic shopping experience a more enjoyable one.
      </p>

      <hr />

      <h3>Privacy Policy</h3>
      <p>
        Even though HallofJusticeComicShop.com receives certain information from
        possible buyers (i.e. name and e-mail) I will never rent, sell, or
        distribute your information.
      </p>
      <p>
        All personal data will only be transferred between the buyer and me.
        Personal data you send will never be stored or used for other purposes.
      </p>
      <p>
        Once the transaction is complete I'll erase all data send by the buyer.
        I have no interest in knowing where my comics went or who owns it.
      </p>
    </DisclaimerStyles>
  </Container>
);

export default disclaimer;
