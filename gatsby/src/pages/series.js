import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const SeriesStyles = styled.main`
  width: 100%;
`;

const comics = ({
  data: {
    series: { nodes },
  },
}) => {
  const series = nodes;

  return (
    <Container>
      <SeriesStyles>
        {series.map((serie) => (
          <Link key={serie.id} to={`/series/${serie.slug.current}`}>
            {serie.title}
          </Link>
        ))}
      </SeriesStyles>
    </Container>
  );
};

export const query = graphql`
  query SerieQuery {
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
