import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as directoryReducer } from "../Domains/Directory/redux/slice";
import { reducer as projectReducer } from "../Domains/Project/redux/slice";
import { reducer as appReducer } from "./appSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  directory: directoryReducer,
  project: projectReducer,
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
