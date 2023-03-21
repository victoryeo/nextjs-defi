This is a DeFi example witten in NextJS.  

Steps to run:  
copy .env-sample to .env.local  
npm run dev

WalletV2:  
  Using bnc-onboard  
WalletV3:  
  Using web3-onboard

It has 3 parts:  
1. call 0x swap API  to swap ETH to DAI  
2. Call Aave smart contract to supply liquidity  
3. Call Uniswap smart contract to swap erc20 tokens  
  
Error handling:  

```  
If you see the error below, it could be because you did not have enough WETH token
Fail with error 'STF'
```
and
```
If you see the error below, it means you are not using goerli on metamask wallet
Error: Could not find a USD/WETH pool for computing gas costs.
```