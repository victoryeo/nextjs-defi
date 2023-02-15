import type { AppState } from '../../store/store'

export const selectUserAddress = (state: AppState) => state.user.userAddress;
