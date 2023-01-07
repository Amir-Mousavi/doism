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
    markProjectAsArchived: (state, action) => {
      const { id } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.isArchived = true;
      }
    },
    markProjectAsNotArchived: (state, action) => {
      const { id } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.isArchived = false;
      }
    },
    deleteProject: (state, action) => {
      const { id } = action.payload;
      state.projects = state.projects.filter((p) => p.id !== id);
    },
    changeProjectColor: (state, action) => {
      const { id, color } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.color = color;
      }
    },
    addTagsToProject: (state, action) => {
      const { id, tags } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.tags = project.tags.concat(tags);
      }
    },
    removeTagsFromProject: (state, action) => {
      const { id, tags } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.tags = project.tags.filter((t) => !tags.includes(t));
      }
    },
  },
});

export const { actions, reducer } = projectSlice;
