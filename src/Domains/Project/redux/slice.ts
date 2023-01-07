import { createSlice } from "@reduxjs/toolkit";

import { Project } from "../../../Models/Project";
import { v4 as uuid } from "uuid";
import { Todo } from "../../../Models/Todo";

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
    addTaskToProject: (state, action) => {
      const { id, taskTitle } = action.payload;

      const newTodo: Todo = {
        id: uuid(),
        title: taskTitle,
      };

      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.todos = project.todos.concat(newTodo);
      }
    },
    moveTaskToProject: (state, action) => {
      const { currenProjectId, todoId, newProjectId } = action.payload;

      // Find the old project
      const project = state.projects.find((p) => p.id === currenProjectId);
      // Find the task
      const todo = project?.todos.find((t) => t.id === todoId);

      // Find the new project
      project.todos = project.todos.filter((t) => t.id !== todoId);

      // Find the new project
      const newProject = state.projects.find((p) => p.id === newProjectId);

      // Add the task to the new project if it exists
      if (newProject && todo) {
        newProject.todos = newProject.todos.concat(todo);
      }
    },
  },
});

export const { actions, reducer } = projectSlice;
