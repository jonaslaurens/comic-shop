/* eslint-disable import/no-unresolved */
import React from 'react';

import { getPublishers } from '../utils/getPublishers';
import { useComicStore } from '../store/globalState';
import SEO from '../components/SEO';
import PublisherFilter from '../components/PublisherFilter/PublisherFilter';
import Container from '../components/Container/Container';

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
