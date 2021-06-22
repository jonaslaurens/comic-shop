import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const LandingStyles = styled.main`
  width: 100%;
  height: calc(100vh - 66px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    padding: 0;
  }
`;

// markup
const IndexPage = () => (
  <LandingStyles>
    <h1>Welcome to the Hall of Justice Comic Shop!</h1>
    <p>
      Browse all <Link to="/comics">Comics</Link> I'm currently offering and
      contact me about a comic you are interested in
    </p>
  </LandingStyles>
);

export default IndexPage;
