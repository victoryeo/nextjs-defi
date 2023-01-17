import styles from "./Aave.module.css";

const tokenList = [
  {
    heading: 'ETH',
    balance: 10,
    rate: '<0.01%',
    collateral: 'yes'
  },
  {
    heading: 'DAI',
    balance: 20,
    rate: '<0.01%',
    collateral: 'yes'
  },
];

export const TokenList = () => {
  return(
    <div>
      {tokenList.map((e: any) => (
        <span className={styles.aaveblock}
          key={e.heading} >
          {e.heading} {e.balance} {e.rate} {e.collateral} 
          <button className={styles.supply} >
            Supply
          </button>
        </span>
      ))}
    </div>
  )
}