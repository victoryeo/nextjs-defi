import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Swap from '../components/Swap/swap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swap</title>
      </Head>
      <Swap/>
    </div>
  )
}