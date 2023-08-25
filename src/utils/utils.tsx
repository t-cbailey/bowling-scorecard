import { frame } from "../../customTypes/customTypes";

export const convertNumbers = (input: string, index: number): string => {
  if (index === 0 && input === "10") {
    return "X";
  } else if (index === 1 && input === "10") {
    return "/";
  } else if (input === "0") {
    return "-";
  } else return input;
};

export const calculateFrameScore = (input: string, input2: string): string => {
  if (input && input2) {
    if (input === "10") {
      return "X";
    } else if (+input + +input2 === 10) {
      return "/";
    } else return (+input + +input2).toString();
  } else return "-";
};

export const calculateGameScore = (frameArr: frame[]): string => {
  if (frameArr.length > 0) {
    const summedArr = frameArr.map((frame, i) => {
      if (frame[0] && frame[1]) {
        if (frame[0] === "10") {
          const val1 = frameArr[i + 1] ? frameArr[i + 1][0] || "0" : "0";
          const val2 = frameArr[i + 1] ? frameArr[i + 1][1] || "0" : "0";
          if (val1 === "10") {
            const val3 = frameArr[i + 2][0] ?? "0";
            const val4 = frameArr[i + 2][1] ?? "0";
            const addedStrikePoints: string = (
              +val1 +
              +val2 +
              +val3 +
              +val4
            ).toString();
            return +frame[0] + +frame[1] + +addedStrikePoints;
          } else {
            const addedStrikePoints: string = (+val1 + +val2).toString();
            return +frame[0] + +frame[1] + +addedStrikePoints;
          }
        }
        if (+frame[0] + +frame[1] === 10 && frameArr[i + 1]) {
          const addedHSPoints: string = frameArr[i + 1][0] ?? "0";
          return +frame[0] + +frame[1] + +addedHSPoints;
        } else return +frame[0] + +frame[1];
      } else return 0;
    });

    return summedArr
      .reduce((a, b) => {
        return a + b;
      })
      .toString();
  } else return "-";
};
