import type { AppState } from '../../store/store'

export const selectAuthState = (state: AppState) => state.rootReducer.authState;
export const selectWeb3Provider = (state: AppState) => state.rootReducer.web3Provider;
