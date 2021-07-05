import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const LandingStyles = styled.main`
  width: 100%;
  height: calc(100vh - 66px - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    padding: 0;
  }
`;

const IndexPage = () => (
  <Container>
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
