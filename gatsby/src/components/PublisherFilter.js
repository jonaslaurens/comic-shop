import { Link, PageProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PublishersStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    font-size: 2.8rem;
    padding: 20px 15px;
    margin: 0 10px;
    display: inline-block;

    @media (min-width: 440px) {
      font-size: 3rem;
    }
  }
`;

const PublisherFilter = ({ publishers }) => (
  <PublishersStyles>
    {publishers.map((publisher) => (
      <Link key={publisher.id} to={`/publisher/${publisher.name}`}>
        {publisher.name}
      </Link>
    ))}
  </PublishersStyles>
);

export default PublisherFilter;
