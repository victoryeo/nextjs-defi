import styles from "./Aave.module.css";

export default function Aave() {
  return(
    <div className={styles.container}>
      <div className={styles.title}>Aave API
      </div>
      <div className={styles.box}>
        <div className={styles.aave}>
          <div className={styles.aavebox}>
          <div className={styles.token}>Assets to Supply</div>
          </div>
          <div className={styles.aavebox}>
          <div className={styles.token}>Assets to Borrow</div>
          </div>
        </div>
      </div>
    </div>
  )
}