/* eslint-disable import/no-unresolved */
import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../components/Container/Container';
import SEO from '../components/SEO';

const PublishersStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    padding: 20px 0 15px 0;
    display: inline-block;
    font-size: 3em;
  }
`;

const Publisher = ({
  data: {
    series: { nodes },
  },
  location,
}) => (
  <Container>
    <SEO title="Publisher" location={location} description="" image="" />
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
