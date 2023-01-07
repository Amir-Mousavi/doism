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
});
