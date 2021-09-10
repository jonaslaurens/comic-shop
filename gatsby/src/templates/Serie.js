import { graphql, Link, navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import Container from '../components/Container';

const SeriesStyles = styled.main`
  width: 100%;
  min-height: calc(100vh - 280px);
  --columns: 2;
  grid-template-columns: repeat(var(--columns), 1fr);
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 3em;
  margin-top: 15px;
  margin-bottom: -15px;

  @media (min-width: 600px) {
    --columns: 3;
  }

  @media (min-width: 960px) {
    --columns: 4;
  }

  @media (min-width: 1500px) {
    --columns: 5;
  }
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

const NoMoreComicStyles = styled.div`
  width: 100%;
  height: calc(100vh - 66px - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const series = ({
  data: {
    comics: { nodes },
  },
}) => {
  const allComics = nodes;

  if (allComics.length === 0)
    return (
      <NoMoreComicStyles>
        <p>No More Comics for this Serie</p>
        <button type="button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </NoMoreComicStyles>
    );

  return (
    <Container>
      <SeriesStyles>
        {allComics.map((comic) => {
          if (comic.available) {
            return (
              <Link key={comic.id} to={`/comic/${comic.slug.current}`}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <SingleComicStyles>
                    <GatsbyImage
                      image={getImage(comic.images[0].asset)}
                      alt={comic.imageAlt[0]}
                    />
                    <p>#{comic.number}</p>
                  </SingleComicStyles>
                </motion.div>
              </Link>
            );
          }
        })}
      </SeriesStyles>
    </Container>
  );
};

export default series;

export const query = graphql`
  query ($id: String!) {
    comics: allSanityComic(
      sort: { fields: number }
      filter: { serie: { id: { eq: $id } } }
    ) {
      nodes {
        id
        number
        title
        price
        available
        slug {
          current
        }
        images {
          asset {
            gatsbyImageData
          }
        }
        imageAlt
        serie {
          title
        }
      }
    }
  }
`;
