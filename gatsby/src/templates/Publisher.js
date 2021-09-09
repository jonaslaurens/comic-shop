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

const Publisher = ({
  data: {
    series: { nodes },
  },
}) => (
  <Container>
    <PublishersStyles>
      {nodes.map((serie) => (
        <Link key={serie.id} to={`/series/${serie.slug.current}`}>
          {serie.title}
        </Link>
      ))}
    </PublishersStyles>
  </Container>
);

Publisher.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Publisher;

export const query = graphql`
  query ($id: String!) {
    series: allSanitySerie(
      sort: { fields: title, order: ASC }
      filter: { publisher: { id: { eq: $id } } }
    ) {
      nodes {
        slug {
          current
        }
        title
        id
      }
    }
  }
`;
