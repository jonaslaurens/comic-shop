/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import SEO from '../components/SEO';

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

const disclaimer = ({ location }) => (
  <Container>
    <SEO
      title="Disclaimer"
      location={location}
      description="Disclaimer about the use of the website"
      image=""
    />
    <DisclaimerStyles>
      <h1>Disclaimer and Terms</h1>
      <h2>
        This is <span>not</span> a full featured, superpowered, web slinging,
        time traveling webshop!
      </h2>
      <p>
        Just a fair warning.. You can buy all comics you see on here.. But there
        is <strong>no direct buy</strong> option. All orders are processed
        between the buyer and HallofJusticeComicShop.com.
      </p>

      <hr />

      <h3>Example buying process</h3>
      <p>
        You found a comic you like and added it to your cart. After filling out
        the form, we will recieve your order and will review it. Soon, after
        reviewing your order, You will recieve an email where we answer any
        questions you might have asked and possibly getting some questions from
        us, like the necessary details where we need to send your order to.
      </p>
      <p>
        When we reach an agreement about your order and we both feel comfortable
        about the process, you will be asked to send out the payment. As soon as
        the payment is recieved we will send out your order, few days later, you
        will be the happy new owner of that one or more missing comics!
      </p>

      <hr />

      <h3>Shipping Your comic</h3>
      <p>
        We send out all comics with the best care we can provide. Bag and board,
        bigger piece of carboard around the comic and bubble wrap around that to
        protect it even further. Depending on the amount, it will either be send
        in a mailer or a sturdy box.
      </p>

      <p>
        We are collectors ourself. The comic you buy will be treated as if it
        were still our own.
      </p>

      <hr />

      <h3>Ownership</h3>
      <p>
        All comics and characters have their own copyright through their
        "creator". HallofJusticeComicShop.com is just a platform to sell A
        personal collection. All HallofJusticeComicShop.com claims to own is
        this website, the look and feel, and the individual functions that make
        your comic shopping experience a more enjoyable one.
      </p>

      <hr />

      <h3>Return Policy</h3>

      <p>More to come</p>

      <hr />

      <h3>Privacy Policy</h3>
      <p>
        Even though HallofJusticeComicShop.com receives certain information from
        possible buyers (i.e. name and e-mail) I will never rent, sell, or
        distribute your information.
      </p>
      <p>
        All personal data will only be transferred between the buyer and
        HallofJusticeComicShop.com. Personal data you send will never be stored
        or used for other purposes other then communication between you and
        HallofJusticeComicShop.com.
      </p>
      <p>
        Once the transaction is complete we'll erase all data send by the buyer.
        We have no further interest in knowing where the comics went or who owns
        them.
      </p>
    </DisclaimerStyles>
  </Container>
);

export default disclaimer;
