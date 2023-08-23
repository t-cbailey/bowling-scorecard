import React from "react";
import { CurrentTurnProps, Player } from "../../customTypes/customTypes";

function CurrentTurn({
  players,
  setTurnCount,
  frameCount,
  setPlayers,
  playerIndex,
  turnCount,
  buttonsDisabled,
  setButtonsDisabled,
}: CurrentTurnProps) {
  const handleScoreSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).value;

    if (+targetName + +players[playerIndex].turns[frameCount] > 10) {
      setTurnCount(1);
      alert("max score is 10!");
    } else {
      setPlayers((curr: Player[]) => {
        if (targetName === "10") {
          if (Array.isArray(curr[playerIndex].turns[frameCount])) {
            curr[playerIndex].turns[frameCount].push("10");
          } else {
            curr[playerIndex].turns.push(["10", "0"]);
            setButtonsDisabled(true);
          }
          return [...curr];
        }
        if (Array.isArray(curr[playerIndex].turns[frameCount])) {
          curr[playerIndex].turns[frameCount].push(targetName);
        } else {
          curr[playerIndex].turns.push([targetName]);
        }
        return [...curr];
      });
      setTurnCount(turnCount + 1);
    }
  };

  React.useEffect(() => {
    if (turnCount > 1) {
      setButtonsDisabled(true);
    }
  }, [turnCount]);

  const convertNumbers = (input: string | undefined) => {
    if (input === "10") {
      return "X";
    }
    if (input === "0") {
      return "-";
    } else return input;
  };

  return (
    <>
      <div>
        {players[playerIndex].turns[frameCount] &&
          convertNumbers(players[playerIndex].turns[frameCount][0])}
      </div>
      <div>
        {players[playerIndex].turns[frameCount] &&
          convertNumbers(players[playerIndex].turns[frameCount][1])}
      </div>
      <ol>
        <button
          disabled={buttonsDisabled}
          value={"0"}
          onClick={handleScoreSelect}
        >
          0
        </button>
        <button
          disabled={buttonsDisabled}
          value={"1"}
          onClick={handleScoreSelect}
        >
          1
        </button>
        <button
          disabled={buttonsDisabled}
          value={"2"}
          onClick={handleScoreSelect}
        >
          2
        </button>
        <button
          disabled={buttonsDisabled}
          value={"3"}
          onClick={handleScoreSelect}
        >
          3
        </button>
        <button
          disabled={buttonsDisabled}
          value={"4"}
          onClick={handleScoreSelect}
        >
          4
        </button>
        <button
          disabled={buttonsDisabled}
          value={"5"}
          onClick={handleScoreSelect}
        >
          5
        </button>
        <button
          disabled={buttonsDisabled}
          value={"6"}
          onClick={handleScoreSelect}
        >
          6
        </button>
        <button
          disabled={buttonsDisabled}
          value={"7"}
          onClick={handleScoreSelect}
        >
          7
        </button>
        <button
          disabled={buttonsDisabled}
          value={"8"}
          onClick={handleScoreSelect}
        >
          8
        </button>
        <button
          disabled={buttonsDisabled}
          value={"9"}
          onClick={handleScoreSelect}
        >
          9
        </button>
        <button
          disabled={buttonsDisabled}
          value={"10"}
          onClick={handleScoreSelect}
        >
          X
        </button>
      </ol>
    </>
  );
}

export default CurrentTurn;
