import { BaseModel } from "./BaseModel";

export type Directory = BaseModel & {
  title: string;
  description?: string;
  tags?: string[];
  projects: string[];
};
