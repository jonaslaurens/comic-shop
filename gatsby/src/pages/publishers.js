import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../components/Container';

const PublishersStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    font-size: 2.8rem;
    padding: 20px 0 15px 0;
    display: inline-block;

    @media (min-width: 440px) {
      font-size: 3rem;
    }
  }
`;

const Publishers = ({
  data: {
    publishers: { nodes },
  },
}) => (
  <Container>
    <PublishersStyles>
      {nodes.map((publisher) => (
        <Link key={publisher.id} to={`/publisher/${publisher.name}`}>
          {publisher.name}
        </Link>
      ))}
    </PublishersStyles>
  </Container>
);

Publishers.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Publishers;

export const query = graphql`
  query {
    publishers: allSanityPublishers {
      nodes {
        name
        id
      }
    }
  }
`;
