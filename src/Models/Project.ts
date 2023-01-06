import { Todo } from "./Todo";
import { BaseModel } from "./BaseModel";

export type Project = BaseModel & {
  title: string;
  description?: string;
  tags: string[];
  todos: Todo[];
  id?: string;
  color?: string;
  order?: number;
};
