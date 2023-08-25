import { calculateGameScore } from "../src/utils/utils";

describe("calculateGameScore function", () => {
  test("should return a string", () => {
    expect(typeof calculateGameScore([["0", "0"]])).toBe("string");
  });
  //   test("can return a single frame calculation", () => {});
});
