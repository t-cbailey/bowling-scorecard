import { frame } from "../customTypes/customTypes";
import { calculateGameScore } from "../src/utils/utils";

describe("calculateGameScore function", () => {
  test('should return "-" if not presented with valid args', () => {
    expect(calculateGameScore([])).toBe("-");
  });
  test("should return a string", () => {
    expect(typeof calculateGameScore([["0", "0"]])).toBe("string");
  });
  test("can return a single frame calculation", () => {
    expect(calculateGameScore([["1", "0"]])).toBe("1");
  });
  test("can return multiple frame calculation, not inc strikes/half strikes", () => {
    const input: frame[] = [
      ["7", "0"],
      ["7", "2"],
      ["3", "4"],
      ["5", "4"],
    ];
    expect(calculateGameScore(input)).toBe("32");
  });
  test("should be able to handle simple half strike values", () => {
    const input: frame[] = [
      ["7", "3"],
      ["1", "0"],
    ];
    expect(calculateGameScore(input)).toBe("12");
  });
  test("should be able to handle complex half strike values", () => {
    const input: frame[] = [
      ["7", "3"],
      ["1", "9"],
      ["2", "8"],
    ];
    expect(calculateGameScore(input)).toBe("33");
  });
});
