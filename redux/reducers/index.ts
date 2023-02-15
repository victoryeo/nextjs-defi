import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Web3Provider, JsonRpcSigner } from "@ethersproject/providers";
import { AppState } from "../../store/store";

const hydrate = createAction<AppState>(HYDRATE);

// Type for our state
export interface RootState {
  authState: boolean;
  web3Provider: Web3Provider;
  signer: JsonRpcSigner;
}

// Initial state
const initialState: RootState = {
  authState: false,
  web3Provider: null,
  signer: null,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState: (state, action) => {
      console.log('setAuthState', action)
      state.authState = action.payload
    },
    /*{
      const newState = { ...state, authState: action.payload }
      console.log(newState)
      return newState;
    },*/

    setWeb3Provider: (state, action) => {
      console.log('setWeb3Provider')
      state.web3Provider = action.payload
    },

    setReduxSigner(state, action) {
      console.log('setReduxSigner')
      state.signer = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: builder => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.root
      }
    })
  },
});

export const rootActions = rootSlice.actions;

export default rootSlice.reducer;