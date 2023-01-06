import { describe, expect, test } from "@jest/globals";

import { createNewDirectory } from "./directory.api.create";

describe("test api", () => {
  test("createNewDirectory should return a new directory", () => {
    const newDirectory = createNewDirectory({
      title: "New Directory",
      description: "This is a new directory",
      tags: ["tag1", "tag2"],
      projects: [],
    });

    expect(newDirectory.title).toBe("New Directory");
    expect(newDirectory.description).toBe("This is a new directory");
    expect(newDirectory.tags).toEqual(["tag1", "tag2"]);
    expect(newDirectory.projects).toEqual([]);
    expect(newDirectory.id).toBeDefined();
  });
});
