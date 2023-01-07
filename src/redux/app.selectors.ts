import { RootState } from "./store";

const isLeftDrawerOpen = (state: RootState) => state.app.leftDrawerOpen;

export const appSelectors = {
  isLeftDrawerOpen,
};
