import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import createStore from "../store/createStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
