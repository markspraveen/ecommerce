import "../styles/globals.css";

import { wrapper } from "../store";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="pwa/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
