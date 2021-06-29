import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';

import { getPublishers } from '../utils/getPublishers';
import PublisherFilter from '../components/PublisherFilter';

const Publishers = ({ data }) => {
  const publishers = getPublishers(data.comics.nodes);

  return (
    <Container>
      <PublisherFilter publishers={publishers} />
    </Container>
  );
};

Publishers.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Publishers;

export const query = graphql`
  query {
    comics: allSanityComic {
      nodes {
        id
        images {
          asset {
            gatsbyImageData
          }
        }
        number
        serie {
          publisher {
            id
            name
          }
          title
          slug {
            current
          }
          id
        }
        title
        slug {
          current
        }
        qty
        price
      }
    }
  }
`;
