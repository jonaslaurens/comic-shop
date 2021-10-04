import styled from 'styled-components';
import { motion } from 'framer-motion';

const PublishersStyles = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  flex-grow: 1;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  a {
    width: 100%;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
  }
`;

const SinglePublisherStyles = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    max-width: 150px !important;
  }

  p {
    width: 50%;
    text-align: center;
    padding: 15px 0;
  }
`;

export { SinglePublisherStyles, PublishersStyles };
