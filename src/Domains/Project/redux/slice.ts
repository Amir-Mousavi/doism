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
    updateProjectTitleAndDescription: (state, action) => {
      const { id, title, description } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.title = title;
        project.description = description;
      }
    },
    markProjectAsDeleted: (state, action) => {
      const { id } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.isDeleted = true;
      }
    },
    markProjectAsNotDeleted: (state, action) => {
      const { id } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.isDeleted = false;
      }
    },
  },
});

export const { actions, reducer } = projectSlice;
