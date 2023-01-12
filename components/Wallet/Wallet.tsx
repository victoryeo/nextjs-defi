import Onboard from '@web3-onboard/core'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import ConnectWallet from './ConnectWallet'

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
})

function Wallet() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ConnectWallet />
    </Web3OnboardProvider>
  )
}

export default Wallet;