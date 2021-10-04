/* eslint-disable import/no-unresolved */
import React from 'react';
import Container from '../components/Container';

import { getPublishers } from '../utils/getPublishers';
import PublisherFilter from '../components/PublisherFilter';
import { useComicStore } from '../store/globalState';
import SEO from '../components/SEO';

const Publishers = ({ location }) => {
  const comics = useComicStore((state) => state.comics);

  const publishers = getPublishers(comics);

  return (
    <Container>
      <SEO title="Publishers" location={location} description="" image="" />
      <PublisherFilter publishers={publishers} />
    </Container>
  );
};

export default Publishers;
