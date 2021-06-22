import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/bangers';
import '@fontsource/montserrat';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
