import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Zerox from '../components/Zerox/Zerox';
import Aave from '../components/Aave/Aave';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeFi</title>
      </Head>
      <Zerox/>
      <Aave/>
    </div>
  )
}