import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import { wrapper } from "../store/store";
import ErrorBoundary from './ErrorBoundary';
import { setupWallets, WalletProvider } from "../components/WalletV2/WalletConnect";

setupWallets();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(wrapper.withRedux(App)), {
  ssr: false,
});