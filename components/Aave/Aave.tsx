import { AaveSupplyTab } from "./AaveSupplyTab";
import styles from "./Aave.module.css";

const listTab = [
  {
    header: 'Assets',
  },
  {
    header: 'Wallet balance',
  },
  {
    header: 'APY',
  },
  {
    header: 'Can be collateral',
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
            <AaveSupplyTab
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