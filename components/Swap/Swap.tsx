import React, { useEffect, useState } from "react";
import qs from "qs";
import Wallet from "../Wallet/Wallet";
import styles from "./Swap.module.css";

export default function Swap() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [account, setAccount] = useState();
  const buttonTexts = ["Connect Wallet", "Swap"];

  const sellToken = "ETH";
  // Aave address in goerli
  const buyToken = "0x5010abCF8A1fbE56c096DCE9Bb2D29d63e141361"; 

  let amount = Number(from) * 10 ** 18;

  const params = {
    sellToken: sellToken,
    buyToken: buyToken,
    sellAmount: amount,
    takerAddress: account,
  };

  useEffect(() => {
    if (account === undefined) {
      setButtonText(buttonTexts[0]);
    } else {
      setButtonText(buttonTexts[1]);
    }
  }, [account]);

  const connectWallet = async () => {

  };

  const executeSwap = async () => {

  }

  const handleClick = () => {
    if (buttonText === buttonTexts[0]) {
      connectWallet();
    } else if (buttonText === buttonTexts[1]) {
      executeSwap();
    }
  };

  const getPrice = async () => {
    await fetch(
      `${process.env.REACT_APP_0X_SWAP_API}/price?${qs.stringify(params)}`
    )
      .then((res) => res.json())
      .then((res) => setTo((res.buyAmount / 10 ** 18).toString()));
  };

  return(
    <div className={styles.container}>
      <div className={styles.title}>SWAP API</div>
      <div className={styles.box}>
      <div className={styles.fromAsset}>
          <div className={styles.token}>ETH</div>
          <input
            className={styles.input}
            disabled={account === undefined}
            type="text"
            placeholder="0"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onBlur={getPrice}
          />
        </div>
        <div className={styles.toAsset}>
          <div className={styles.token}>Aave</div>
          <input
            className={styles.input}
            disabled={true}
            type="text"
            placeholder="0"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <Wallet />
        <div>
          {account ? (
            <span className={styles.wallet}>Wallet connected: {account}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}