import { createSlice } from "@reduxjs/toolkit";
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
    setAuthState: (state, action) => {
      console.log('setAuthState', action)
      state.authState = action.payload
    },
    /*{
      console.log('setAuthState', action)
      state.authState = action.payload
      const newState = { ...state, authState: action.payload }
      console.log(newState)
      return newState;
    },*/

    setWeb3Provider: (state, action) => {
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

export const rootActions = rootSlice.actions;

export default rootSlice.reducer;