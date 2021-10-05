/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import styled from 'styled-components';
import { LayoutProps } from '../../types';

const ContainerStyles = styled.div`
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  min-height: calc(100vh - 280px);

  @media (min-width: 762px) {
    min-height: calc(100vh - 66px - 80px);
  }

  @media (min-width: 1150px) {
    width: 1140px;
  }
`;

const Container: FC<LayoutProps> = ({ children }) => (
  <ContainerStyles>{children}</ContainerStyles>
);

export default Container;
