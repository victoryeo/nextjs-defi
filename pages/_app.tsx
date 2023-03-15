import type { AppProps } from "next/app";
import { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { Provider } from "react-redux";
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import { wrapper } from "../store/store";
import ErrorBoundary from './ErrorBoundary';
import { setupWallets, WalletProvider } from "../components/WalletV2/WalletConnect";
import Wallet from '../components/WalletV3/Wallet'

//setupWallets();

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const RPC_URL = process.env.REACT_APP_WEB3_PROVIDER_HTTPS!;
const injected = injectedModule()
const walletConnect = walletConnectModule()

const wallets = [
  injected,
  walletConnect
]

const chains = [
  {
    id: '0x5',
    token: 'ETH',
    label: 'Goerli',
    rpcUrl: RPC_URL
  },
]

const web3Onboard = init({
  wallets,
  chains,
  accountCenter: {
    desktop: {
      position: 'bottomRight',
      enabled: true,
      minimal: false
    },
    mobile: {
      enabled: true
    }
  },
  appMetadata: {
    name: 'My Web3 Onboard',
    icon: '<svg>My App Icon</svg>',
    description: 'My Web3 onboarding.'
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  const [count, setCount] = useState(0);

  const { store, props } = wrapper.useWrappedStore(pageProps);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  // handleClick variable has always the same callback function object 
  // between renderings of App.
  const handleClick = useCallback((pageDetails) => {
    console.log(pageDetails)
    setCount(1)
  }, [count]);

  return (
    <Provider store={store}>
    <ErrorBoundary>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <Component {...props} />
      </Web3OnboardProvider>
    </ErrorBoundary>
    </Provider>
  );
};

export default (App);
//export default dynamic(() => Promise.resolve(wrapper.withRedux(App)), {
//  ssr: false,
//});