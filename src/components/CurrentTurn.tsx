import React from "react";
import { CurrentTurnProps, Player } from "../../customTypes/customTypes";
import "../Styling/currentTurn.scss";
import { convertNumbers, calculateFrameScore } from "../utils/utils";

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
  disableHSButton,
  setDisableHSButton,
  disableStrikeButton,
  setDisableStrikeButton,
}: CurrentTurnProps) {
  const currentPlayer = players[playerIndex].name;

  const handleScoreSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).value;
    if (+targetName + +players[playerIndex].frames[frameCount] > 10) {
      setTurnCount(1);
      alert("max score is 10!");
    } else {
      setPlayers((curr: Player[]) => {
        if (targetName === "10") {
          if (Array.isArray(curr[playerIndex].frames[frameCount])) {
            curr[playerIndex].frames[frameCount].push("10");
          } else {
            curr[playerIndex].frames.push(["10", "0"]);
            setDisableHSButton(true);
            setButtonsDisabled(true);
            setDisableStrikeButton(true);
          }
          return [...curr];
        } else if (Array.isArray(curr[playerIndex].frames[frameCount])) {
          curr[playerIndex].frames[frameCount].push(targetName);
        } else {
          curr[playerIndex].frames.push([targetName]);
        }
        return [...curr];
      });
      setTurnCount(turnCount + 1);
      setDisableStrikeButton(true);
    }
  };

  React.useEffect(() => {
    if (turnCount > 1) {
      setButtonsDisabled(true);
      setDisableStrikeButton(true);
    }
    if (
      turnCount === 1 &&
      players[playerIndex].frames[frameCount][0] !== "10"
    ) {
      setDisableHSButton(false);
    } else {
      setDisableHSButton(true);
    }
  }, [turnCount]);

  React.useEffect(() => {
    if (Array.isArray(players[playerIndex].frames[frameCount])) {
      const turn1 = players[playerIndex].frames[frameCount][0] || "0";
      const turn2 = players[playerIndex].frames[frameCount][1] || "0";
      setTotalFrameScore(calculateFrameScore(turn1, turn2));
    }
  }, [turnCount]);

  return (
    <>
      <div id="turnDataContainer">
        <h2>{`${currentPlayer}'s turn`}</h2>
        <div className="frameContainer">
          <div className="outerTurnBox">
            <div className="innerTurnBox">
              {players[playerIndex].frames[frameCount] &&
                convertNumbers(
                  players[playerIndex].frames[frameCount][1] || "0",
                  1
                )}
            </div>
            <div className="innerTurnBox">
              {players[playerIndex].frames[frameCount] &&
                convertNumbers(players[playerIndex].frames[frameCount][0], 0)}
            </div>
            <p className="frameTotalScore">{totalFrameScore}</p>
          </div>
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
          disabled={disableHSButton}
          value={(10 - +players[playerIndex].frames[frameCount]).toString()}
          onClick={handleScoreSelect}
        >
          /
        </button>
        <button
          className="turnButton"
          disabled={disableStrikeButton}
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
