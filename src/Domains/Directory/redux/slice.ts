import { createSlice } from "@reduxjs/toolkit";
import { Directory } from "../../../Models/Directory";

export interface DirectoryState {
  directories: Directory[];
}

const initialState: DirectoryState = {
  directories: [],
};

export const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    createDirectory: (state, action) => {
      state.directories.push(action.payload);
    },
  },
});

export const { actions, reducer } = directorySlice;
