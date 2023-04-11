import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContainer from "@/containers/App";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <AppContainer
        Component={Component}
        pageProps={pageProps}
        router={router}
      />
    </Provider>
  );
}
