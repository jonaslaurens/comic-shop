import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const PublishersStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  a {
    font-size: 2.8rem;
    padding: 20px 15px;
    margin: 0 10px;
    display: inline-block;
  }
`;

const SinglePublisherStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;

  p {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
`;

const PublisherFilter = ({ publishers }) => (
  <PublishersStyles>
    {publishers.map((publisher) => (
      <SinglePublisherStyles key={publisher.id} whileHover={{ scale: 1.2 }}>
        <Link to={`/publisher/${publisher.name}`}>
          <GatsbyImage
            image={getImage(publisher.logo.asset)}
            alt={publisher.logoAlt}
          />
          <p>{publisher.name}</p>
        </Link>
      </SinglePublisherStyles>
    ))}
  </PublishersStyles>
);

export default PublisherFilter;
