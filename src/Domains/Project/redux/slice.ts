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
  reducers: {},
});

export const { actions, reducer } = projectSlice;
