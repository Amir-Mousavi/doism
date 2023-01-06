import { Project } from "../../Models/Project";
import { Directory } from "../../Models/Directory";
import { v4 as uuid } from "uuid";

interface CreateDirectoryInterface {
  title: string;
  description?: string;
  tags?: string[];
  projects: Project[];
}

export const createNewDirectory = (
  newDirectory: CreateDirectoryInterface
): Directory => {
  return {
    title: newDirectory.title,
    description: newDirectory.description || "",
    tags: newDirectory.tags || [],
    projects: newDirectory.projects || [],
    createdAt: new Date(),
    updatedAt: new Date(),
    id: uuid(),
  };
};
