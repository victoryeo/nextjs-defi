import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import ErrorBoundary from './ErrorBoundary';
import { setupWallets, WalletProvider } from "../components/WalletV2/WalletConnect";

setupWallets();

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

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