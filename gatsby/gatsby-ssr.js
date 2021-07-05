import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/bangers';
import '@fontsource/montserrat';

import { CartProvider } from './src/store/cartStore.tsx';

export function wrapPageElement({ element, props }) {
  return (
    <CartProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Layout {...props}>{element}</Layout>
    </CartProvider>
  );
}
