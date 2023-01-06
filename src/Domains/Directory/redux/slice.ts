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
    updateDirectoryTitleAndDescription: (state, action) => {
      const { id, title, description } = action.payload;
      const directory = state.directories.find((d) => d.id === id);
      if (directory) {
        directory.title = title;
        directory.description = description;
      }
    },
    addNewTagsToDirectory: (state, action) => {
      const { id, tags } = action.payload;
      const directory = state.directories.find((d) => d.id === id);
      if (directory) {
        directory.tags = directory.tags.concat(tags);
      }
    },
  },
});

export const { actions, reducer } = directorySlice;
