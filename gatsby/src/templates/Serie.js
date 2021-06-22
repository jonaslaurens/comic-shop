import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Container from '../components/Container';

const SeriesStyles = styled.main`
  width: 100%;
  min-height: calc(100vh - 66px - 80px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 3em;
  margin-top: 15px;
  margin-bottom: -15px;
`;

const SingleComicStyles = styled.div`
  width: 100%;

  img {
    width: 100%;
  }

  p {
    font-size: 1.8rem;
  }
`;

const series = ({
  data: {
    comics: { nodes },
  },
}) => {
  const allComics = nodes;

  return (
    <Container>
      <SeriesStyles>
        {allComics.map((comic) => (
          <Link key={comic.id} to={`/comic/${comic.slug.current}`}>
            <SingleComicStyles>
              <GatsbyImage
                image={getImage(comic.images[0].asset)}
                alt="hello"
              />
              <p>#{comic.number}</p>
            </SingleComicStyles>
          </Link>
        ))}
      </SeriesStyles>
    </Container>
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
        price
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
