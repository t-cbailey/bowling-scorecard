import React from "react";
import { CurrentTurnProps, Player } from "../../customTypes/customTypes";

function CurrentTurn({
  setTurnCount,
  frameCount,
  setPlayers,
  playerIndex,
  turnCount,
  buttonsDisabled,
  setButtonsDisabled,
}: CurrentTurnProps) {
  console.log(turnCount);

  const handleScoreSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).value;

    setPlayers((curr: Player[]) => {
      if (Array.isArray(curr[playerIndex].turns[frameCount])) {
        curr[playerIndex].turns[frameCount].push(targetName);
      } else {
        curr[playerIndex].turns.push([targetName]);
      }
      return [...curr];
    });

    if (targetName === "X") {
      setPlayers((curr: Player[]) => {
        curr[playerIndex].turns[frameCount].push("0");
        return [...curr];
      });
      setButtonsDisabled(true);
    }
    setTurnCount(turnCount + 1);
  };

  React.useEffect(() => {
    if (turnCount > 1) {
      setButtonsDisabled(true);
    }
  }, [turnCount]);

  return (
    <>
      <div>{}</div>
      <div>BOX WITH TURN 2</div>
      <ol>
        <button
          disabled={buttonsDisabled}
          value={1}
          onClick={handleScoreSelect}
        >
          1
        </button>
        <button
          disabled={buttonsDisabled}
          value={2}
          onClick={handleScoreSelect}
        >
          2
        </button>
        <button
          disabled={buttonsDisabled}
          value={3}
          onClick={handleScoreSelect}
        >
          3
        </button>
        <button
          disabled={buttonsDisabled}
          value={4}
          onClick={handleScoreSelect}
        >
          4
        </button>
        <button
          disabled={buttonsDisabled}
          value={5}
          onClick={handleScoreSelect}
        >
          5
        </button>
        <button
          disabled={buttonsDisabled}
          value={6}
          onClick={handleScoreSelect}
        >
          6
        </button>
        <button
          disabled={buttonsDisabled}
          value={7}
          onClick={handleScoreSelect}
        >
          7
        </button>
        <button
          disabled={buttonsDisabled}
          value={8}
          onClick={handleScoreSelect}
        >
          8
        </button>
        <button
          disabled={buttonsDisabled}
          value={9}
          onClick={handleScoreSelect}
        >
          9
        </button>
        <button
          disabled={buttonsDisabled}
          value={"X"}
          onClick={handleScoreSelect}
        >
          X
        </button>
      </ol>
    </>
  );
}

export default CurrentTurn;
