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
});
