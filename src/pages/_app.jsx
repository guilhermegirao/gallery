import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Gallery</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default MyApp;
