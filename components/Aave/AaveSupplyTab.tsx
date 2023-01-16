import styles from "./Aave.module.css";

export const AaveSupplyTab = ({ listTab, setStatusFilter, status }: any) => {
  return(
    <div>
      {listTab.map((e: any) => (
        <span className={styles.aavespan}
          key={e.header}>
          {e.header}
        </span>
      ))}
    </div>
  )
}