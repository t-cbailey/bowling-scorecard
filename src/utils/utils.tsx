export const convertNumbers = (input: string | undefined) => {
  if (input === "10") {
    return "X";
  }
  if (input === "0") {
    return "-";
  } else return input;
};

export const calculateFrameScore = (
  input: string,
  input2: string | undefined
) => {
  if (input && input2) {
    if (input === "10" || input2 === "10") {
      return "X";
    } else if (+input + +input2 === 10) {
      return "/";
    } else return (+input + +input2).toString();
  }
};
