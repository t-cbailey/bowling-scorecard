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

// export const calculateGameScore = (frameArr: frame[]): string => {};
