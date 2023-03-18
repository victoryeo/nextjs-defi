import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { AlphaRouter, SwapOptionsSwapRouter02, SwapType } from "@uniswap/smart-order-router";
import { Percent } from "@uniswap/sdk-core";
import { selectUserAddress } from "../../redux/selectors/user";
import { selectSigner, selectWeb3Provider } from "../../redux/selectors/";

import styles from "./Uniswap.module.css"

export default function Uniswap() {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("")
  const [fromToken, setFromToken] = useState<string>("ETH");
  const [toToken, setToToken] = useState<string>("UNI");
  const account = useSelector(selectUserAddress);
  const web3Provider = useSelector(selectWeb3Provider);

  const handleTokenClick = () => {

  }

  const handleTokenChange = () => {

  }

  const ETH_DECIMAL_PT = 18
  const GOERLI_ID = 5
  
  const executeSwap = (fromValue: string) => {
    const amount = ethers.utils
      .parseUnits(fromValue, ETH_DECIMAL_PT)
      .toString();
    console.log(amount)

    const router = new AlphaRouter({
      chainId: GOERLI_ID,
      provider: web3Provider,
    });

    const options: SwapOptionsSwapRouter02 = {
      recipient: account,
      slippageTolerance: new Percent(50, 10_000),
      deadline: Math.floor(Date.now() / 1000 + 1800),
      type: SwapType.SWAP_ROUTER_02,
    }
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
        </div>
        <button className={styles.change} onClick={() => handleTokenChange()}>
          flip
        </button>  
        <div className={styles.toAsset}>
          <input
            className={styles.input}
            type="text"
            placeholder="0"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
          />
          <button className={styles.token} onClick={() => handleTokenClick()}>
            {toToken}
          </button>
        </div>
        <button
          className={
            account === "" || !account ? styles.btnDisabled : styles.btnSwap
          }
          onClick={() => executeSwap(fromValue)}
        >
          Swap
        </button>
      </div>
    </div>
  )
}