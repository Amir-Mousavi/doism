import { Priority } from "../enums/Priority";

export type Todo = {
  title: string;
  dueDate?: Date;
  startDate?: Date;
  description?: string;
  tags: string[];
  priority?: Priority;
  subTasks?: Todo[];
  completed?: boolean;
  duration?: number;
  id?: string;
};
