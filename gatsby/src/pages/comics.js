import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SeriesStyles = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
`;

const comics = ({ data }) => (
  <SeriesStyles>
    <p>Comics hero</p>
  </SeriesStyles>
);

export const query = graphql`
  query ComicQuery {
    series: allSanitySerie {
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

export default comics;
