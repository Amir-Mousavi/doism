import { describe, expect, test } from "@jest/globals";
import { reducer, actions } from "./appSlice";

describe("App reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      isDarkMode: false,
      leftDrawerOpen: true,
    });
  });

  test("should handle openLeftDrawer", () => {
    expect(
      reducer(
        {
          isDarkMode: false,
          leftDrawerOpen: false,
        },
        actions.openLeftDrawer()
      )
    ).toEqual({
      isDarkMode: false,
      leftDrawerOpen: true,
    });
  });

  test("should handle closeLeftDrawer", () => {
    expect(
      reducer(
        {
          isDarkMode: false,
          leftDrawerOpen: true,
        },
        actions.closeLeftDrawer()
      )
    ).toEqual({
      isDarkMode: false,
      leftDrawerOpen: false,
    });
  });
});
