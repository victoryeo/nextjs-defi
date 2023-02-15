import { createAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store/store";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction<AppState>(HYDRATE);

// Type for our state
export interface UserAddress {
  userAddress: string;
}

// Initial state
const initialState: UserAddress = {
  userAddress: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAddress(state, action) {
      console.log('setUserAddress')
      state.userAddress = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.user
      }
    })
  }
})

export const { setUserAddress } = userSlice.actions
export default userSlice.reducer