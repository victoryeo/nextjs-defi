import type { AppProps } from "next/app";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import ErrorBoundary from './ErrorBoundary';
import { setupWallets, WalletProvider } from "../components/WalletV2/WalletConnect";

setupWallets();

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const App = ({ Component, pageProps }: AppProps) => {
  const [count, setCount] = useState(0);

  const { store, props } = wrapper.useWrappedStore(pageProps);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <Provider store={store}>
    <ErrorBoundary>
      <WalletProvider>
        <Component {...props} />
      </WalletProvider>
    </ErrorBoundary>
    </Provider>
  );
};

export default (App);
//export default dynamic(() => Promise.resolve(wrapper.withRedux(App)), {
//  ssr: false,
//});