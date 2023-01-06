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
    removeDirectory: (state, action) => {
      const { id } = action.payload;
      state.directories = state.directories.filter((d) => d.id !== id);
    },
    addProjectToDirectory: (state, action) => {
      const { id, projectId } = action.payload;
      const directory = state.directories.find((d) => d.id === id);
      if (directory) {
        directory.projects.push(projectId);
      }
    },
    moveProjectToDirectory: (state, action) => {
      const { id, projectId, newDirectoryId } = action.payload;
      const directory = state.directories.find((d) => d.id === id);
      if (directory) {
        directory.projects = directory.projects.filter((p) => p !== projectId);
      }
      const newDirectory = state.directories.find(
        (d) => d.id === newDirectoryId
      );
      if (newDirectory) {
        newDirectory.projects.push(projectId);
      }
    },
  },
});

export const { actions, reducer } = directorySlice;
