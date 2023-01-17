import type { AppState } from '../../store/store'

export const selectAuthState = (state: AppState) => state.rootReducer.authState;
