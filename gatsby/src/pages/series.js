import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SeriesStyles = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
`;

const comics = ({
  data: {
    series: { nodes },
  },
}) => {
  const series = nodes;

  console.log(series);

  return (
    <SeriesStyles>
      {series.map((serie) => (
        <Link key={serie.id} to={`/comics/${serie.slug.current}`}>
          {serie.title}
        </Link>
      ))}
    </SeriesStyles>
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
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        id
      }
    }
  }
`;

export default comics;
