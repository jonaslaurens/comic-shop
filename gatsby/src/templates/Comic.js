import { graphql } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import { formatMoney } from '../utils/formatMoney';
import ContactForm from '../components/ContactForm';
import { CartContext } from '../store/cartStore';

const SingleComicPageStyles = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImageStyles = styled.div`
  padding: 38px;

  img {
    width: 100%;
  }
`;

const ComicInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 38px 0;

  h2,
  p {
    text-align: left;
  }

  h2 {
    padding-bottom: 5px;
  }

  button {
    margin-top: 20px;
  }
`;

const Comic = ({ data }) => {
  const { images, title, serie, number, price } = data.comic.nodes[0];

  const { addComic } = useContext(CartContext);

  return (
    <Container>
      <SingleComicPageStyles>
        <ImageStyles>
          <GatsbyImage image={getImage(images[0].asset)} alt="hello" />
        </ImageStyles>
        <ComicInfoStyles>
          <div>
            <h2>
              {serie.title} #{number}
            </h2>
            <small>{title}</small>
            <br />
            <strong>{formatMoney(price)}</strong>
          </div>
          <button type="button" onClick={() => addComic(data.comic.nodes[0])}>
            Add to cart
          </button>
        </ComicInfoStyles>
      </SingleComicPageStyles>
    </Container>
  );
};

Comic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Comic;

export const query = graphql`
  query ($id: String!) {
    comic: allSanityComic(filter: { id: { eq: $id } }) {
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
