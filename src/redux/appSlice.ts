import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  isDarkMode: boolean;
  leftDrawerOpen: boolean;
}

const initialState: AppState = {
  isDarkMode: false,
  leftDrawerOpen: true,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    openLeftDrawer: (state) => {
      state.leftDrawerOpen = true;
    },
    closeLeftDrawer: (state) => {
      state.leftDrawerOpen = false;
    },
  },
});

export const { reducer, actions } = appSlice;
