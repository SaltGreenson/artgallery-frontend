import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContainer from "@/containers/App";
import { Provider } from "react-redux";
import store from "@/store/store";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>BREENKY</title>
        <meta property="og:title" content="BREENKY" />
        <meta property="og:image" content="/ogLogo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Provider store={store}>
        <AppContainer
          Component={Component}
          pageProps={pageProps}
          router={router}
        />
      </Provider>
    </>
  );
}
