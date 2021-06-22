import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SeriesStyles = styled.main`
  width: 100%;
  min-height: calc(100vh - 66px);
`;

const SingleComicStyles = styled.div`
  width: 20%;
`;

const series = ({
  data: {
    comics: { nodes },
  },
}) => {
  const allComics = nodes;

  return (
    <SeriesStyles>
      {allComics.map((comic) => (
        <Link to={`/comic/${comic.slug.current}`}>
          <SingleComicStyles key={comic.id}>
            <p>
              {comic.serie.title} #{comic.number} {comic.title}
            </p>
            <GatsbyImage image={getImage(comic.images[0].asset)} alt="hello" />
          </SingleComicStyles>
        </Link>
      ))}
    </SeriesStyles>
  );
};

export default series;

export const query = graphql`
  query ($id: String!) {
    comics: allSanityComic(filter: { serie: { id: { eq: $id } } }) {
      nodes {
        id
        number
        title
        slug {
          current
        }
        images {
          asset {
            gatsbyImageData
          }
        }
        serie {
          title
        }
      }
    }
  }
`;
