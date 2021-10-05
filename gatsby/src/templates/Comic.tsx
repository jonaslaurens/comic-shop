/* eslint-disable import/no-unresolved */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Container from '../components/Container/Container';
import { formatMoney } from '../utils/formatMoney';

import 'react-toastify/dist/ReactToastify.css';
import { useComicStore } from '../store/globalState';
import SEO from '../components/SEO';

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

  .pricetag {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

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

const Comic = ({ data, location }) => {
  const { id } = data.comic.nodes[0];

  const { getComic, addComicToCart } = useComicStore((state) => state);

  const { images, serie, number, title, price, available } = getComic(id)[0];

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

Comic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Comic;

export const query = graphql`
  query ($id: String!) {
    comic: allSanityComic(filter: { id: { eq: $id } }) {
      nodes {
        id
        _id
      }
    }
  }
`;
