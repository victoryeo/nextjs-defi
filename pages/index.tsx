import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Swap from '../components/Swap/Swap';
import Aave from '../components/Aave/Aave';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swap</title>
      </Head>
      <Swap/>
      <Aave/>
    </div>
  )
}