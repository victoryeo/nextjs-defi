import { useConnectWallet } from "@web3-onboard/react";
import { ButtonEx } from "../ButtonEx/ButtonEx";

export default function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  if (wallet?.provider) {
    return (
      <div>
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
      <ButtonComp
        disabled={connecting}
        onClick={async () => {
          await connect();
        }}
        title="Connect"
        id="WalletConnect"
      ></ButtonComp>
    </div>
  );
}