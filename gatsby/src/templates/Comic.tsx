/* eslint-disable import/no-unresolved */
import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ToastContainer } from 'react-toastify';
import Container from '../components/Container/Container';
import { formatMoney } from '../utils/formatMoney';

import 'react-toastify/dist/ReactToastify.css';
import { useComicStore } from '../store/globalState';
import SEO from '../components/SEO';

import {
  ComicInfoStyles,
  ImageStyles,
  SingleComicPageStyles,
} from '../styles/ComicPageStyles';

const Comic = ({ data, location }) => {
  const { addComicToCart } = useComicStore((state) => state);

  const { id, images, serie, number, title, price, available } =
    data.comic.nodes[0];

  return (
    <Container>
      <SEO title={title} location={location} description="" image="" />
      <SingleComicPageStyles>
        <ImageStyles>
          <GatsbyImage image={getImage(images[0].asset)} alt="hello" />
        </ImageStyles>
        <ComicInfoStyles>
          <>
            <h2>
              {serie.title} #{number}
            </h2>
            <small>{title}</small>
            <br />
            <div className="pricetag">
              <strong>{formatMoney(price)}</strong>
              <span>
                {available ? '1 Available' : 'Currently out of stock'}
              </span>
            </div>
          </>
          <button type="button" onClick={() => addComicToCart(id)}>
            Add to cart
          </button>
        </ComicInfoStyles>
      </SingleComicPageStyles>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </Container>
  );
};

export default Comic;

export const query = graphql`
  query ($id: String!) {
    comic: allSanityComic(filter: { id: { eq: $id } }) {
      nodes {
        id
        _id
        images {
          asset {
            gatsbyImageData
          }
        }
        serie {
          title
        }
        number
        title
        price
        available
      }
    }
  }
`;
