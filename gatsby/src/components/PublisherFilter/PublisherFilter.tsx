import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import {
  PublishersStyles,
  SinglePublisherStyles,
} from './PublisherFilterStyles';

const PublisherFilter = ({ publishers }) => (
  <PublishersStyles>
    {publishers.map((publisher) => (
      <Link key={publisher.id} to={`/publisher/${publisher.name}`}>
        <SinglePublisherStyles whileHover={{ scale: 1.05 }}>
          <GatsbyImage
            image={getImage(publisher.logo.asset)}
            alt={publisher.logoAlt}
          />
          <p>{publisher.name}</p>
        </SinglePublisherStyles>
      </Link>
    ))}
  </PublishersStyles>
);

export default PublisherFilter;
