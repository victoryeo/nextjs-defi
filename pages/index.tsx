import Head from 'next/head'
import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'
import styles from '../styles/Home.module.css';
import Zerox from '../components/Zerox/Zerox';
import Aave from '../components/Aave/Aave';

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>DeFi</title>
      </Head>
      <button
          style={buttonStyles}
          disabled={connecting}
          onClick={() => (wallet ? disconnect(wallet) : connect())}
        >
          {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect Wallet'}
        </button>
      <Zerox/>
      <Aave/>
    </div>
  )
}

const buttonStyles = {
  borderRadius: '6px',
  background: '#111827',
  border: 'none',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
  color: 'white',
  padding: '14px 12px',
  marginTop: '40px',
  fontFamily: 'inherit'
}