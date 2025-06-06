import '@/styles/scss/globals.scss';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import React from 'react';
import '@/utils/i18n';

export interface MyAppProps extends AppProps {}

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const Header = dynamic(() => import('@/components/layouts/Header'), { ssr: false });
  const Footer = dynamic(() => import('@/components/layouts/Footer'), { ssr: false });

  return (
    <>
      <Head>
        <title>Flokicoin (FLC)</title>
        <meta name="description" content="Generated by create-wc-dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
