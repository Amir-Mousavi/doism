import { describe, expect, test } from "@jest/globals";
import { reducer, actions } from "./slice";

describe("Project reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      projects: [],
    });
  });

  test("should handle createProject", () => {
    expect(
      reducer(
        {
          projects: [],
        },
        actions.createProject({
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: expect.any(String),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ],
    });
  });

  test("should handle updateProjectTitleAndDescription", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
            },
          ],
        },
        actions.updateProjectTitleAndDescription({
          id: "1234",
          title: "Updated Project",
          description: "This is an updated project",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "Updated Project",
          description: "This is an updated project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
        },
      ],
    });
  });

  test("should handle markProjectAsDeleted", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
            },
          ],
        },
        actions.markProjectAsDeleted({
          id: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
          isDeleted: true,
        },
      ],
    });
  });

  test("should handle markProjectAsNotDeleted", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
              isDeleted: true,
            },
          ],
        },
        actions.markProjectAsNotDeleted({
          id: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
          isDeleted: false,
        },
      ],
    });
  });

  test("should handle markProjectAsArchived", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
            },
          ],
        },
        actions.markProjectAsArchived({
          id: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
          isArchived: true,
        },
      ],
    });
  });

  test("should handle markProjectAsNotArchived", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
              isArchived: true,
            },
          ],
        },
        actions.markProjectAsNotArchived({
          id: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
          isArchived: false,
        },
      ],
    });
  });

  test("should handle deleteProject", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
            },
          ],
        },
        actions.deleteProject({
          id: "1234",
        })
      )
    ).toEqual({
      projects: [],
    });
  });

  test("should handle changeProjectColor", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
              color: "blue",
            },
          ],
        },
        actions.changeProjectColor({
          id: "1234",
          color: "red",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
          color: "red",
        },
      ],
    });
  });

  test("should handle addProjectTag", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2"],
              id: "1234",
              todos: [],
              color: "blue",
            },
          ],
        },
        actions.addTagsToProject({
          id: "1234",
          tags: ["tag3", "tag4"],
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [],
          color: "blue",
        },
      ],
    });
  });

  test("should handle removeTagsFromProject", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [],
              color: "blue",
            },
          ],
        },
        actions.removeTagsFromProject({
          id: "1234",
          tags: ["tag3", "tag4"],
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2"],
          id: "1234",
          todos: [],
          color: "blue",
        },
      ],
    });
  });

  test("should handle addTodoToProject", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [],
              color: "blue",
            },
          ],
        },
        actions.addTaskToProject({
          id: "1234",
          taskTitle: "New Task",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: expect.any(String),
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle moveTaskToProject", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                },
              ],
              color: "blue",
            },
            {
              title: "New Project2",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "12344",
              todos: [],
              color: "blue",
            },
          ],
        },
        actions.moveTaskToProject({
          currenProjectId: "1234",
          todoId: "1234",
          newProjectId: "12344",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [],
          color: "blue",
        },
        {
          title: "New Project2",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "12344",
          todos: [
            {
              title: "New Task",
              id: "1234",
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle addSubTaskToTask", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                },
              ],
              color: "blue",
            },
          ],
        },
        actions.addSubTaskToTask({
          todoId: "1234",
          subTaskTitle: "New Sub Task",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: "1234",
              steps: [
                {
                  title: "New Sub Task",
                  id: expect.any(String),
                },
              ],
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle removeSubTaskFromTask", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                  steps: [
                    {
                      title: "New Sub Task",
                      id: "1234",
                    },
                  ],
                },
              ],
              color: "blue",
            },
          ],
        },
        actions.removeSubTaskFromTask({
          subTaskId: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: "1234",
              steps: [],
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle markTaskAsCompleted", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                  steps: [
                    {
                      title: "New Sub Task",
                      id: "1234",
                    },
                  ],
                },
              ],
              color: "blue",
            },
          ],
        },
        actions.markTaskAsCompleted({
          todoId: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: "1234",
              steps: [
                {
                  title: "New Sub Task",
                  id: "1234",
                },
              ],
              completed: true,
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle markTaskAsUncompleted", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                  steps: [
                    {
                      title: "New Sub Task",
                      id: "1234",
                    },
                  ],
                  completed: true,
                },
              ],
              color: "blue",
            },
          ],
        },
        actions.markTaskAsNotCompleted({
          todoId: "1234",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: "1234",
              steps: [
                {
                  title: "New Sub Task",
                  id: "1234",
                },
              ],
              completed: false,
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle markSubTaskAsCompleted", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                  steps: [
                    {
                      title: "New Sub Task",
                      id: "1234777",
                    },
                  ],
                },
              ],
              color: "blue",
            },
          ],
        },
        actions.markSubTaskAsCompleted({
          subTaskId: "1234777",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: "1234",
              steps: [
                {
                  completed: true,
                  title: "New Sub Task",
                  id: "1234777",
                },
              ],
            },
          ],
          color: "blue",
        },
      ],
    });
  });

  test("should handle markSubTaskAsUncompleted", () => {
    expect(
      reducer(
        {
          projects: [
            {
              title: "New Project",
              description: "This is a new project",
              tags: ["tag1", "tag2", "tag3", "tag4"],
              id: "1234",
              todos: [
                {
                  title: "New Task",
                  id: "1234",
                  steps: [
                    {
                      title: "New Sub Task",
                      id: "1234777",
                      completed: true,
                    },
                  ],
                },
              ],
              color: "blue",
            },
          ],
        },
        actions.markSubTaskAsNotCompleted({
          subTaskId: "1234777",
        })
      )
    ).toEqual({
      projects: [
        {
          title: "New Project",
          description: "This is a new project",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          id: "1234",
          todos: [
            {
              title: "New Task",
              id: "1234",
              steps: [
                {
                  completed: false,
                  title: "New Sub Task",
                  id: "1234777",
                },
              ],
            },
          ],
          color: "blue",
        },
      ],
    });
  });
});
