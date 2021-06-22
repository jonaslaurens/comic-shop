import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerStyles = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  min-height: calc(100vh - 66px - 80px);

  @media (min-width: 1150px) {
    width: 1140px;
  }
`;

const Container = ({ children }) => (
  <ContainerStyles>{children}</ContainerStyles>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
