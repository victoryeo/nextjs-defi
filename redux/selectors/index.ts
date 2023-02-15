import type { AppState } from '../../store/store'

export const selectAuthState = (state: AppState) => state.root.authState;
export const selectWeb3Provider = (state: AppState) => state.root.web3Provider;
export const selectSigner = (state: AppState) => state.root.signer;
