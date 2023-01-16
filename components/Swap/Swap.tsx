import React, { useEffect, useState } from "react";
import qs from "qs";
import Web3 from 'web3';
import Wallet from "../WalletV2/Wallet";
import styles from "./Swap.module.css";

export default function Swap() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [account, setAccount] = useState("");
  const buttonTexts = ["Disable", "Swap"];

  const web3 = new Web3(Web3.givenProvider);

  const sellToken = "ETH";
  // dai address in goerli
  const buyToken = "0xdc31ee1784292379fbb2964b3b9c4124d8f89c60"; 

  let amount = Number(from) * 10 ** 18;

  const params = {
    sellToken: sellToken,
    buyToken: buyToken,
    sellAmount: amount,
    takerAddress: account,
  };

  useEffect(() => {
    if (account == "" || account == null) {
      setButtonText(buttonTexts[0]);
    } else {
      setButtonText(buttonTexts[1]);
    }
  }, [account]);

  const executeSwap = async () => {
    console.log('executeSwap')
    const params = {
      sellToken: sellToken,
      buyToken: buyToken,
      sellAmount: amount,
      takerAddress: account,
    };

    const response = await fetch(
      `${process.env.ZEROX_SWAP_API}/quote?${qs.stringify(params)}`
    );
    const output = await response.json()
    console.log(output)
    const receipt = await web3.eth.sendTransaction(
      output
    );
    console.log(receipt)
  }

  const handleClick = () => {
    console.log(account)
    if (account != "") {
      executeSwap();
    }
  };

  const getPrice = async () => {
    await fetch(
      `${process.env.ZEROX_SWAP_API}/price?${qs.stringify(params)}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTo((res.buyAmount / 10 ** 18).toString())
      });
  };

  return(
    <div className={styles.container}>
      <div className={styles.connectWallet}>
        <div className={styles.title}></div>
        <Wallet setAcc={setAccount}/>
      </div>
      <div className={styles.title}>Swap API</div>
      <div className={styles.box}>
      <div className={styles.fromAsset}>
          <div className={styles.token}>ETH</div>
          <input
            className={styles.input}
            disabled={false}
            type="text"
            placeholder="0"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onBlur={getPrice}
          />
        </div>
        <div className={styles.toAsset}>
          <div className={styles.token}>DAI</div>
          <input
            className={styles.input}
            disabled={false}
            type="text"
            placeholder="0"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <button className={styles.swap} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}