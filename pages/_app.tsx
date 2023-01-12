import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import ErrorBoundary from './ErrorBoundary';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});