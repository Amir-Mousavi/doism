import { Priority } from "../enums/Priority";
import { BaseModel } from "./BaseModel";

export type Todo = BaseModel & {
  title: string;
  dueDate?: Date;
  startDate?: Date;
  description?: string;
  tags?: string[];
  priority?: Priority;
  subTasks?: Todo[];
  completed?: boolean;
  duration?: number;
};
