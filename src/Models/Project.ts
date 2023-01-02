import { Todo } from "./Todo";

export type Project = {
  title: string;
  description?: string;
  tags: string[];
  todos: Todo[];
  id?: string;
  color?: string;
  order?: number;
};
