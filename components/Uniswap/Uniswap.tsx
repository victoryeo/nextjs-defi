import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { AlphaRouter, SwapOptionsSwapRouter02, SwapType, SwapRoute, ChainId } from "@uniswap/smart-order-router";
import { Percent, CurrencyAmount, TradeType, Token } from "@uniswap/sdk-core";
import contracts from '../../config/constants/contracts'
import { selectUserAddress } from "../../redux/selectors/user";
import { selectSigner, selectWeb3Provider } from "../../redux/selectors/";
import { WETH_TOKEN, UNI_TOKEN } from "../../config/tokens";
import { getTokenTransferApproval } from "../../utils/web3Utils";

import styles from "./Uniswap.module.css"

export default function Uniswap() {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("")
  const [fromToken, setFromToken] = useState<string>("WETH");
  const [toToken, setToToken] = useState<string>("UNI");
  const account = useSelector(selectUserAddress);
  const web3Provider = useSelector(selectWeb3Provider);
  const signer = useSelector(selectSigner);

  const handleTokenClick = () => {

  }

  const handleTokenChange = () => {

  }

  const ETH_DECIMAL_PT = 18
  const GOERLI_ID = 5

  const executeSwap = async (fromValue: string) => {
    // convert to wei
    const amount: string = ethers.utils
      .parseUnits(fromValue, ETH_DECIMAL_PT)
      .toString();
    console.log(amount)

    // create router instance
    const router = new AlphaRouter({
      chainId: ChainId.GÖRLI,
      provider: web3Provider,
    });

    // create routing options
    const options: SwapOptionsSwapRouter02 = {
      recipient: account,
      slippageTolerance: new Percent(50, 10_000),
      deadline: Math.floor(Date.now() / 1000 + 1800),
      type: SwapType.SWAP_ROUTER_02,
    }

    // create a route 
    const route: SwapRoute = await router.route(
      CurrencyAmount.fromRawAmount(
        WETH_TOKEN,
        amount
      ),
      UNI_TOKEN,
      TradeType.EXACT_INPUT,
      options
    );

    // give approval to swap router
    const tokenApproval = await getTokenTransferApproval(signer, WETH_TOKEN, amount)
    console.log(tokenApproval)

    // send transaction
    const tx = [{
      from: account,
      to: contracts.V3_SWAP_ROUTER_ADDRESS[5],
      value: route.methodParameters?.value,
      data: route.methodParameters?.calldata,
      maxFeePerGas: "200000000",
      maxPriorityFeePerGas: "200000000",
    }];

    const receipt = await web3Provider.send('eth_sendTransaction', tx)
    console.log(receipt)
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