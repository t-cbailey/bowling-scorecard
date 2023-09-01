import { frame } from "../customTypes/customTypes";
import { calculateGameScore } from "../src/utils/utils";

describe("calculateGameScore function", () => {
  describe("generics", () => {
    test('should return "-" if not presented with valid args', () => {
      expect(calculateGameScore([])).toBe("-");
    });
    test("should return a string", () => {
      expect(typeof calculateGameScore([["0", "0"]])).toBe("string");
    });
  });

  describe("frames 1-9", () => {
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
    test("should handle simple strike values", () => {
      const input: frame[] = [
        ["10", "0"],
        ["1", "1"],
      ];
      expect(calculateGameScore(input)).toBe("14");
    });
    test("should handle consecutive strike values", () => {
      const input: frame[] = [
        ["10", "0"],
        ["10", "0"],
        ["9", "0"],
      ];
      expect(calculateGameScore(input)).toBe("57");
    });
    test("should handle mixed values (strike at end)", () => {
      const input: frame[] = [
        ["10", "0"],
        ["0", "10"],
        ["9", "1"],
        ["1", "1"],
        ["9", "1"],
        ["10", "0"],
      ];
      expect(calculateGameScore(input)).toBe("82");
    });
    test("should handle mixed values (HS at end)", () => {
      const input: frame[] = [
        ["10", "0"],
        ["0", "10"],
        ["9", "1"],
        ["1", "1"],
        ["9", "1"],
        ["9", "1"],
      ];
      expect(calculateGameScore(input)).toBe("81");
    });
    test("should handle mixed values (2xStrike at end)", () => {
      const input: frame[] = [
        ["10", "0"],
        ["0", "10"],
        ["9", "1"],
        ["1", "1"],
        ["10", "0"],
        ["10", "0"],
      ];
      expect(calculateGameScore(input)).toBe("82");
    });
  });

  describe("frame 10", () => {
    test("should handle simple number inputs in frame 10", () => {
      const input: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
      ];
      const input2: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "5"],
      ];
      expect(calculateGameScore(input)).toBe("10");
      expect(calculateGameScore(input2)).toBe("15");
    });
    test("should handle half strike and number combination", () => {
      const input: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "9", "1"],
      ];
      const input2: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "1"],
        ["5", "5", "1"],
      ];
      expect(calculateGameScore(input)).toBe("20");
      expect(calculateGameScore(input2)).toBe("21");
    });
    test("should handle half strike and strike combination", () => {
      const input: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "9", "10"],
      ];
      const input2: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "1"],
        ["5", "5", "10"],
      ];
      expect(calculateGameScore(input)).toBe("29");
      expect(calculateGameScore(input2)).toBe("30");
    });
    test("should handle single strike and numbers combination", () => {
      const input: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["10", "8", "1"],
      ];
      expect(calculateGameScore(input)).toBe("28");
    });
    test("should handle double strike and number combination", () => {
      const input: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["10", "10", "1"],
      ];
      expect(calculateGameScore(input)).toBe("30");
    });
    test("should handle triple strike combination", () => {
      const input: frame[] = [
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["1", "0"],
        ["10", "10", "10"],
      ];
      expect(calculateGameScore(input)).toBe("39");
    });
  });
  describe("Full Game Examples", () => {
    test("should handle a full mixed game", () => {
      const input: frame[] = [
        ["8", "0"],
        ["7", "0"],
        ["5", "3"],
        ["9", "1"],
        ["9", "1"],
        ["10", "0"],
        ["8", "0"],
        ["5", "1"],
        ["3", "7"],
        ["9", "0", "0"],
      ];
      expect(calculateGameScore(input)).toBe("122");
      const input2: frame[] = [
        ["8", "2"],
        ["9", "0"],
        ["4", "4"],
        ["7", "2"],
        ["9", "0"],
        ["10", "0"],
        ["10", "0"],
        ["8", "0"],
        ["3", "5"],
        ["9", "1", "7"],
      ];
      expect(calculateGameScore(input2)).toBe("133");

      const input3: frame[] = [
        ["7", "2"],
        ["4", "5"],
        ["9", "0"],
        ["3", "6"],
        ["8", "1"],
        ["5", "4"],
        ["7", "2"],
        ["3", "6"],
        ["8", "1"],
        ["10", "8", "1"],
      ];
      expect(calculateGameScore(input3)).toBe("100");
      const input4: frame[] = [
        ["5", "3"],
        ["8", "2"],
        ["7", "1"],
        ["9", "0"],
        ["6", "3"],
        ["4", "5"],
        ["10", "0"],
        ["5", "3"],
        ["6", "2"],
        ["8", "1"],
      ];
      expect(calculateGameScore(input4)).toBe("103");
      const input5: frame[] = [
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "10", "10"],
      ];
      expect(calculateGameScore(input5)).toBe("300");
      const input6: frame[] = [
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0", "10"],
      ];
      expect(calculateGameScore(input6)).toBe("280");
      const input7: frame[] = [
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "0"],
        ["10", "10", "0"],
      ];
      expect(calculateGameScore(input7)).toBe("290");
    });
  });
});
