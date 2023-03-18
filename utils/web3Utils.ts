import { ethers } from 'ethers'
import { Token } from "@uniswap/sdk-core";
import contracts from '../config/constants/contracts'
import { weth_gw_abi } from '../config/abi/WethGateway'
import { erc20_abi } from '../config/abi/ERC20'
import { lp_abi } from '../config/abi/LendingPool'

const getContract = (abi: any, address: string, signer: ethers.providers.Provider | ethers.Signer) => {
  const contract = new ethers.Contract(address, abi, signer)
  return contract
}

export const getLPContract = (signer: ethers.providers.Provider | ethers.Signer) => {
  console.log("getLPContract", signer)
  return getContract(lp_abi, contracts.LENDING_POOL[5], signer)
}

export const getWethGwContract = (signer: ethers.providers.Provider | ethers.Signer): ethers.Contract => {
  console.log("getWethGwContract", signer)
  return getContract(weth_gw_abi, contracts.WETH_GATEWAY[5], signer)
}

export const getDaiContract = (signer: ethers.providers.Provider | ethers.Signer) => {
  console.log('getDaiContract', signer)
  return getContract(erc20_abi, contracts.DAI_CONTRACT[5], signer)
}

export async function getTokenTransferApproval(
  signer: ethers.providers.Provider | ethers.Signer,
  token: Token,
  amount: string,
): Promise<any> {
  try {
    const tokenContract: ethers.Contract = getContract(erc20_abi, token.address, signer);

    const transaction = await tokenContract.approve(contracts.V3_SWAP_ROUTER_ADDRESS[5], amount);

    const receipt = await transaction.wait();
    return receipt;
  } catch (e) {
    console.error(e)
    return null;
  }
}