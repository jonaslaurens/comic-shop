import React from 'react';
import Container from '../components/Container';

import { getPublishers } from '../utils/getPublishers';
import PublisherFilter from '../components/PublisherFilter';
import { useComicStore } from '../store/globalState';

const Publishers = () => {
  const comics = useComicStore((state) => state.comics);

  const publishers = getPublishers(comics);

  return (
    <Container>
      <PublisherFilter publishers={publishers} />
    </Container>
  );
};

export default Publishers;
