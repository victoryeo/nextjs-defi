import { useEffect, useState } from "react";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import { ButtonEx } from "../ButtonEx/ButtonEx";
import styles from "./Wallet.module.css";

interface Account {
  address: string;
  balance: Record<string, string>;
}


export default function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [ethersProvider, setProvider] = useState<ethers.providers.Web3Provider | null>();
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    if (wallet?.provider) {
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance
      })
    }
  }, [wallet])

  useEffect(() => {
    // If the wallet has a provider than the wallet is connected
    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
    }
  }, [wallet])

  if (wallet?.provider) {
    return (
      <div>
        <div className={styles.wallet}>{ account.address}</div>
        <div>Connected to {wallet.label}</div>
        <ButtonEx
          onClick={() => {
            disconnect({ label: wallet.label });
          }}
          title="Disconnect"
          id="WalletDisconnect"
        ></ButtonEx>
      </div>
    );
  }

  return (
    <div>
      <ButtonEx
        disabled={connecting}
        onClick={async () => {
          await connect();
        }}
        title="Connect"
        id="WalletConnect"
      ></ButtonEx>
    </div>
  );
}