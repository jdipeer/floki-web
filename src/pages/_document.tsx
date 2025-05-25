import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* Remove any Emotion or specific style tags */}</Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N4PQZR5N"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
