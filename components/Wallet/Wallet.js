import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import ConnectWallet from "./ConnectWallet";

const injected = injectedModule()
const walletConnect = walletConnectModule()

const wallets = [
  injected,
  walletConnect,
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
    name: 'Web3 Onboard',
    description: 'Web3 onboarding.'
  },
})

function Wallet() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ConnectWallet />
    </Web3OnboardProvider>
  )
}

export default Wallet;