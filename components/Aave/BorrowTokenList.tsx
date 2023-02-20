import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { getWethGwContract, getDaiContract, getLPContract } from "../../utils/web3Utils";
import { selectSigner } from "../../redux/selectors"
import { selectUserAddress } from "../../redux/selectors/user";
import contracts from "../../config/constants/contracts";
import styles from "./Aave.module.css";

const tokenList = [
  {
    tokenName: 'ETH',
    available: 5,
    varrate: '3.01%',
    stablerate: '-'
  },
  {
    tokenName: 'DAI',
    available: 11,
    varrate: '3.23%',
    stablerate: '6.57%'
  },
];

let contractWETH: ethers.Contract;
let contractDAI: ethers.Contract;
let contractLP: ethers.Contract;
let account: string;

const handleClick = async (token) => {
  alert("borrow "+token)
  const overrides = { gasLimit: 1000000, gasPrice: 210000 };
  if (token === "DAI") {
    console.log("borrow DAI")
    const newBorrow = await contractLP.borrow(
      contracts.DAI_CONTRACT[5],
      1, // 1 wei
      2, // interestRateMode --  1 -> stable, 2 -> variable
      0, // referralCode -- set to 0
      account,
      overrides
      );
    console.log(newBorrow);
    const res = await newBorrow.wait();
    console.log(res);
  } else if (token === "ETH") {
    console.log("borrow ETH")
    console.log(account)

    const newBorrow = await contractWETH.borrowETH(contractLP.address, 
      1, // 1wei
      2, // interestRateMode --  1 -> stable, 2 -> variable
      0, // referralCode -- set to 0
      overrides)
    const res = await newBorrow.wait()
    console.log(res)
  }
}

export const BorrowTokenList = () => {
  const buttonTextArray = ["Disable", "Borrow"];
  const [buttonText, setButtonText] = useState("");

  account = useSelector(selectUserAddress);
  const signer = useSelector(selectSigner);
  contractWETH = getWethGwContract(signer);
  contractDAI = getDaiContract(signer);
  contractLP = getLPContract(signer);

  useEffect(() => {
    if (account == "" || account == null) {
      setButtonText(buttonTextArray[0]);
    } else {
      setButtonText(buttonTextArray[1]);
    }
  }, [account]);

  useEffect(() => {
    if (account == "" || account == null) {
      setButtonText(buttonTextArray[0]);
    } else {
      setButtonText(buttonTextArray[1]);
    }
  }, []);

  return(
    <TableContainer>
      <Table>

        <TableBody className={styles.tokenList}>
          {tokenList.map((e, index) => (
            <TableRow key={e.tokenName}>
            <TableCell style={{width: '15%'}}>{e.tokenName} </TableCell>
            <TableCell style={{width: '25%'}}>{e.available} </TableCell>
            <TableCell style={{width: '20%'}}>{e.varrate} </TableCell>
            <TableCell style={{width: '20%'}}>{e.stablerate} </TableCell>
            <TableCell style={{width: '20%'}}>
              <button className={buttonText==="Disable"?styles.disableButton:styles.supplyLiquidity} 
                onClick={()=>handleClick(e.tokenName)} 
                disabled={buttonText==="Disable"?true:false}>
                {buttonText}
              </button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    
  )
}