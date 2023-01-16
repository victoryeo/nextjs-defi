import { AaveSupplyTab } from "./AaveSupplyTab";
import { AaveBorrowTab } from "./AaveBorrowTab";
import { TokenList } from "./TokenList";
import styles from "./Aave.module.css";

const listSupply = [{
    header: 'Assets',
  },{
    header: 'Wallet balance',
  },{
    header: 'APY',
  },{
    header: 'Can be collateral',
  },
];

const listBorrow = [{
    heading: 'Assets',
  },{
    heading: 'Available',
  },{
    heading: 'APY, variable',
  },{
    heading: 'APY, stable',
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
            listTab={listSupply}
            />
            <TokenList/>
          </div>
          <div className={styles.emptybox}></div>
          <div className={styles.aavebox}>
            <div className={styles.token}>Assets to Borrow</div>
            <AaveBorrowTab
            listTab={listBorrow}
            />
          </div>
        </div>
      </div>
    </div>
  )
}