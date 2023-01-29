import { ethers } from "ethers";
import { useSelector } from "react-redux";
import { getWethGwContract } from "../../utils/web3Utils";
import { selectSigner } from "../../redux/selectors"
import contracts from "../../config/constants/contracts";
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

let contractWETH: ethers.Contract;

const handleClick = async (token) => {
  alert("supply "+token)
  const overrides = { gasLimit: 1000000, gasPrice: 210000 };
  if (token === "DAI") {
    console.log("supply DAI")
  } else if (token === "ETH") {
    console.log("supply ETH")
    const ethOverrides = { ...overrides, value: 1 };
    const newSupply = await contractWETH.depositETH(
      contracts.LENDING_POOL[5],
      "0x3dfdefe45660999e22344273448535fa8379389377",
      0, // referralCode
      ethOverrides
    );
  }
}

export const TokenList = () => {
  const signer = useSelector(selectSigner);
  contractWETH = getWethGwContract(signer);

  return(
    <div>
      {tokenList.map((e: any) => (
        <span className={styles.aaveblock}
          key={e.heading} >
          {e.heading} {e.balance} {e.rate} {e.collateral} 
          <button className={styles.supply} onClick={()=>handleClick(e.heading)} >
            Supply
          </button>
        </span>
      ))}
    </div>
  )
}