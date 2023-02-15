import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { rootSlice } from "../redux/reducers";
import { userSlice } from "../redux/reducers/user";

const makeStore = () =>
  configureStore({
    reducer: {
      [rootSlice.name]: rootSlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);