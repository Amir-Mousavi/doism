import { createSlice } from "@reduxjs/toolkit";

import { Project } from "../../../Models/Project";
import { v4 as uuid } from "uuid";

export interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    createProject: (state, action) => {
      state.projects.push({
        ...action.payload,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: uuid(),
      });
    },
  },
});

export const { actions, reducer } = projectSlice;
