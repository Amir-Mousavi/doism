import { Project } from "./Project";

export type Directory = {
  title: string;
  description?: string;
  tags: string[];
  projects: Project[];
  id?: string;
};
