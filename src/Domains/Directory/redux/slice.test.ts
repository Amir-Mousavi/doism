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
});
