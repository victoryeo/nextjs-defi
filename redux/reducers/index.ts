import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store/store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface RootState {
  authState: boolean;
}

// Initial state
const initialState: RootState = {
  authState: false,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      console.log('setAuthState')
      state.authState = action.payload;
    },

    setWeb3Provider(state, action) {
      console.log('setWeb3Provider')
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },

  },
});

export const { setAuthState } = rootSlice.actions;

export const selectAuthState = (state: AppState) => state.root.authState;

export default rootSlice.reducer;