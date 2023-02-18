import styles from "./Aave.module.css";

export const AaveBorrowTab = ({ listTab, setStatusFilter, status }: any) => {
  return(
    <div className={styles.tokenHeader}>
      {listTab.map((e: any) => (
        <span className={styles.aavespan}
          key={e.header}>
          {e.header}
        </span>
      ))}
    </div>
  )
}