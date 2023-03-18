import { SupportedChainId, Token } from "@uniswap/sdk-core";

export const WETH_TOKEN = new Token(
  SupportedChainId.GOERLI,
  "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  18,
  "WETH",
  "Wrapped Ether"
);

export const UNI_TOKEN = new Token(
  SupportedChainId.GOERLI,
  "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  18,
  "UNI",
  "Uniswap"
);