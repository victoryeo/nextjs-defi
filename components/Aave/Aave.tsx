import { AaveHomeTab } from "./AaveHomeTab";
import styles from "./Aave.module.css";

const listTab = [
  {
    status: 'Assets',
  },
  {
    status: 'Wallet balance',
  },
  {
    status: 'APY',
  },
  {
    status: 'Can be collateral',
  },
];

export default function Aave() {
  return(
    <div className={styles.container}>
      <div className={styles.title}>Aave API
      </div>
      <div className={styles.box}>
        <div className={styles.aave}>
          <div className={styles.aavebox}>
            <div className={styles.token}>Assets to Supply</div>
            <AaveHomeTab
            listTab={listTab}
            />
          </div>
          <div className={styles.emptybox}></div>
          <div className={styles.aavebox}>
            <div className={styles.token}>Assets to Borrow</div>
          </div>
        </div>
      </div>
    </div>
  )
}