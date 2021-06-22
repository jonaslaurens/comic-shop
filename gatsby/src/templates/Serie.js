import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SeriesStyles = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
`;

const SingleComicStyles = styled.div`
  width: 20%;
`;

const comics = ({
  data: {
    comics: { nodes },
  },
}) => {
  const allComics = nodes;

  console.log(allComics);

  return (
    <SeriesStyles>
      {allComics.map((comic) => (
        <SingleComicStyles key={comic.id}>
          {console.log(comic)}
          <p>{comic.title}</p>
          <p>{comic.number}</p>
          <GatsbyImage image={getImage(comic.images[0].asset)} alt="hello" />
        </SingleComicStyles>
      ))}
    </SeriesStyles>
  );
};

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
      }
    }
  }
`;

export default comics;
