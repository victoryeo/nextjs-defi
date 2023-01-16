import styles from "./Aave.module.css";

export const AaveHomeTab = ({ listTab, setStatusFilter, status }: any) => {
  return(
    <div>
      {listTab.map((e: any) => (
        <span className={styles.aavespan}
          key={e.status}>
          {e.status}
        </span>
      ))}
    </div>
  )
}