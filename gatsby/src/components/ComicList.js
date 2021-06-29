import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Container from './Container';

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

const ComicList = () => {
  const { comics } = useStaticQuery(graphql`
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
          slug {
            current
          }
          serie {
            publisher {
              id
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <SeriesStyles>
        {comics.nodes.map((comic) => (
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

export default ComicList;
