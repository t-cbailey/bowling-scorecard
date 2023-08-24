import React, { useEffect } from "react";
import { CurrentTurnProps, Player } from "../../customTypes/customTypes";
import "../Styling/currentTurn.scss";

function CurrentTurn({
  players,
  setTurnCount,
  frameCount,
  setPlayers,
  playerIndex,
  turnCount,
  buttonsDisabled,
  setButtonsDisabled,
  totalFrameScore,
  setTotalFrameScore,
}: CurrentTurnProps) {
  const [disableHS, setDisableHS] = React.useState<boolean>(true);

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

    if (turnCount === 1) {
      setDisableHS(false);
    } else {
      setDisableHS(true);
    }
  }, [turnCount]);

  useEffect(() => {
    if (Array.isArray(players[playerIndex].turns[frameCount])) {
      const turn1 = players[playerIndex].turns[frameCount][0] || "0";
      const turn2 = players[playerIndex].turns[frameCount][1] || "0";
      setTotalFrameScore(calculateFrameScore(turn1, turn2));
    }
  }, [turnCount]);

  const calculateFrameScore = (input: string, input2: string) => {
    if (input === "10" || input2 === "10") {
      return "X";
    } else if (+input + +input2 === 10) {
      return "/";
    } else return (+input + +input2).toString();
  };

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
      <div className="frameContainer">
        <div className="outerTurnBox">
          <div className="innerTurnBox">
            {players[playerIndex].turns[frameCount] &&
              convertNumbers(players[playerIndex].turns[frameCount][1])}
          </div>
          <div className="innerTurnBox">
            {players[playerIndex].turns[frameCount] &&
              convertNumbers(players[playerIndex].turns[frameCount][0])}
          </div>
          <p className="frameTotalScore">{totalFrameScore}</p>
        </div>
      </div>
      <ol id="turnButtonContainer">
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"0"}
          onClick={handleScoreSelect}
        >
          0
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"1"}
          onClick={handleScoreSelect}
        >
          1
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"2"}
          onClick={handleScoreSelect}
        >
          2
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"3"}
          onClick={handleScoreSelect}
        >
          3
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"4"}
          onClick={handleScoreSelect}
        >
          4
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"5"}
          onClick={handleScoreSelect}
        >
          5
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"6"}
          onClick={handleScoreSelect}
        >
          6
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"7"}
          onClick={handleScoreSelect}
        >
          7
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"8"}
          onClick={handleScoreSelect}
        >
          8
        </button>
        <button
          className="turnButton"
          disabled={buttonsDisabled}
          value={"9"}
          onClick={handleScoreSelect}
        >
          9
        </button>
        <button
          className="turnButton"
          disabled={disableHS}
          value={(10 - +players[playerIndex].turns[frameCount]).toString()}
          onClick={handleScoreSelect}
        >
          /
        </button>
        <button
          className="turnButton"
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
