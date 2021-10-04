/* eslint-disable import/no-unresolved */
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import SEO from '../components/SEO';

const LandingStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 280px);

  @media (min-width: 762px) {
    min-height: calc(100vh - 66px - 80px);
  }

  a {
    padding: 0;
  }
`;

const IndexPage = ({ location }) => (
  <Container>
    <SEO title="Home" location={location} description="" image="" />
    <LandingStyles>
      <h1>Welcome to the Hall of Justice Comic Shop!</h1>
      <p>
        Browse all Comics I'm currently offering and contact me about a comic
        you are interested in.
      </p>
      <Link to="/publishers">
        <button type="button">Browse Comics</button>
      </Link>
      <h3>
        <Link to="/disclaimer">Disclaimer</Link>
      </h3>
    </LandingStyles>
  </Container>
);
export default IndexPage;
