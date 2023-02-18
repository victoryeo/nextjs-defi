import { AaveSupplyTab } from "./AaveSupplyTab";
import { AaveBorrowTab } from "./AaveBorrowTab";
import { SupplyTokenList } from "./SupplyTokenList";
import { BorrowTokenList } from "./BorrowTokenList";
import styles from "./Aave.module.css";

const listSupply = [{
    tokenName: 'Assets',
    balance: 'Wallet balance',
    rate: 'APY',
    collateral: 'Can be collateral',
    action: 'Action',
  }
];

const listBorrow = [{
    tokenName: 'Assets',
    available: 'Available',
    varrate: 'APY, variable',
    stablerate: 'APY, stable',
    action: 'Action',
  }
];

export default function Aave() {
  return(
    <div className={styles.container}>
      <div className={styles.title}>Aave Lend and Borrow API
      </div>
      <div className={styles.box}>
        <div className={styles.aave}>
          <div className={styles.aavebox}>
            <div className={styles.token}>Assets to Supply</div>
            <AaveSupplyTab
            listTab={listSupply}
            />
            <SupplyTokenList/>
          </div>
          <div className={styles.emptybox}></div>
          <div className={styles.aavebox}>
            <div className={styles.token}>Assets to Borrow</div>
            <AaveBorrowTab
            listTab={listBorrow}
            />
            <BorrowTokenList/>
          </div>
        </div>
      </div>
    </div>
  )
}