import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EthAddress from "./EthAddress";
import { useWallet } from "./WalletConnect";

interface ParamProps {
  setAcc: Function
}

const Wallet: React.FC<ParamProps> = ({setAcc}) => {
    const { selectWallet, logoutWallet, address } = useWallet();

    const logout = () => {
        console.log("logging out");
        logoutWallet();
    };

    useEffect(() => {
      setAcc(address)
    }, [address]);

    return (
        <>
            {address ? (
                <>
                    <EthAddress address={address} networkId={5} />

                    <Box
                        onClick={logout}
                        display={["none", "block"]}
                        sx={{ cursor: "pointer" }}
                    >
                        <ExitToAppIcon />
                    </Box>
                </>
            ) : (
                <Button
                    variant="contained"
                    onClick={selectWallet}
                    color="primary"
                    sx={{
                        cursor: "pointer",
                        borderRadius: 5,}
                    }
                >

                    <Typography variant="button" sx={{ fontSize: "1rem" }}>
                        Connect Wallet
                    </Typography>
                </Button>
            )}
        </>
    );
};

export default Wallet;