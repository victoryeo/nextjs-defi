import React, { useEffect, useState } from "react";
import styles from "./Uniswap.module.css"

export default function Uniswap() {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("")
  const [fromToken, setFromToken] = useState<string>("ETH");

  const handleTokenClick = () => {

  }

  const handleTokenChange = () => {

  }

  return (
    <div className={styles.container}>
      <div  className={styles.title}>UNISWAP API</div>
      <div className={styles.box}>
        <div className={styles.fromAsset}>
          <input
            className={styles.input}
            type="number"
            placeholder="0"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            onBlur={(e) => {
              if (e.target.value === "") {
                setToValue("0");
                return console.log("NULL");
              }
            }}
          />
          <button className={styles.token} onClick={() => handleTokenClick()}>
            {fromToken}
          </button>
          <button className={styles.change} onClick={() => handleTokenChange()}>
            swap
          </button>
        </div>
      </div>
    </div>
  )
}