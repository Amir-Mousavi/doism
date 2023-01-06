import { describe, expect, test } from "@jest/globals";
import { reducer, actions } from "./slice";

describe("test reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, actions.createDirectory)).toEqual({
      directories: [],
    });
  });

  test("should handle createDirectory", () => {
    expect(
      reducer(
        {
          directories: [],
        },
        actions.createDirectory({
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: [],
          id: "1234",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: [],
          id: expect.any(String),
        },
      ],
    });
  });

  test("should handle updateDirectoryTitleAndDescription", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: [],
              id: "1234",
            },
          ],
        },
        actions.updateDirectoryTitleAndDescription({
          id: "1234",
          title: "Updated Directory",
          description: "This is an updated directory",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "Updated Directory",
          description: "This is an updated directory",
          tags: ["tag1", "tag2"],
          projects: [],
          id: "1234",
        },
      ],
    });
  });

  test("should handle addNewTagsToDirectory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: [],
              id: "1234",
            },
          ],
        },
        actions.addNewTagsToDirectory({
          id: "1234",
          tags: ["tag3", "tag4"],
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2", "tag3", "tag4"],
          projects: [],
          id: "1234",
        },
      ],
    });
  });

  test("should handle removeDirectory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: [],
              id: "1234",
            },
          ],
        },
        actions.removeDirectory({
          id: "1234",
        })
      )
    ).toEqual({
      directories: [],
    });
  });

  test("should handle addProjectToDirectory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: [],
              id: "1234",
            },
          ],
        },
        actions.addProjectToDirectory({
          id: "1234",
          projectId: "5678",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: ["5678"],
          id: "1234",
        },
      ],
    });
  });

  test("should handle move project to directory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: ["5678"],
              id: "1234",
            },
            {
              title: "New Directory 2",
              description: "This is a new directory 2",
              tags: ["tag1", "tag2"],
              projects: [],
              id: "1235",
            },
          ],
        },
        actions.moveProjectToDirectory({
          id: "1234",
          projectId: "5678",
          newDirectoryId: "1235",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: [],
          id: "1234",
        },
        {
          title: "New Directory 2",
          description: "This is a new directory 2",
          tags: ["tag1", "tag2"],
          projects: ["5678"],
          id: "1235",
        },
      ],
    });
  });

  test("should handle remove tags from directory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: [],
              id: "1234",
            },
          ],
        },
        actions.removeTagsFromDirectory({
          id: "1234",
          tags: ["tag1"],
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag2"],
          projects: [],
          id: "1234",
        },
      ],
    });
  });

  test("should handle remove project from directory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: ["5678"],
              id: "1234",
            },
          ],
        },
        actions.removeProjectFromDirectory({
          id: "1234",
          projectId: "5678",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: [],
          id: "1234",
        },
      ],
    });
  });

  test("should handle archive directory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: ["5678"],
              id: "1234",
            },
          ],
        },
        actions.archiveDirectory({
          id: "1234",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: ["5678"],
          id: "1234",
          isArchived: true,
        },
      ],
    });
  });

  test("should handle unarchive directory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: ["5678"],
              id: "1234",
              isArchived: true,
            },
          ],
        },
        actions.unarchiveDirectory({
          id: "1234",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: ["5678"],
          id: "1234",
          isArchived: false,
        },
      ],
    });
  });

  test("should handle mark as deleted directory", () => {
    expect(
      reducer(
        {
          directories: [
            {
              title: "New Directory",
              description: "This is a new directory",
              tags: ["tag1", "tag2"],
              projects: ["5678"],
              id: "1234",
            },
          ],
        },
        actions.markDirectoryAsDeleted({
          id: "1234",
        })
      )
    ).toEqual({
      directories: [
        {
          title: "New Directory",
          description: "This is a new directory",
          tags: ["tag1", "tag2"],
          projects: ["5678"],
          id: "1234",
          isDeleted: true,
        },
      ],
    });
  });
});
