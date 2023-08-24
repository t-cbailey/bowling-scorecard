import { PlayProps, turnCount } from "../../customTypes/customTypes";
import { useNavigate } from "react-router-dom";
import React from "react";
import GameOver from "./GameOver";
import CurrentTurn from "./CurrentTurn";
import "../Styling/play.scss";

function Play({ players, setPlayers, frameCount, setFrameCount }: PlayProps) {
  const [playerIndex, setPlayerIndex] = React.useState<number>(0);
  const [turnCount, setTurnCount] = React.useState<turnCount>(0);
  const [buttonsDisabled, setButtonsDisabled] = React.useState<boolean>(false);
  const [disableHSButton, setDisableHSButton] = React.useState<boolean>(true);
  const [totalFrameScore, setTotalFrameScore] = React.useState<string>("-");
  const [disableStrikeButton, setDisableStrikeButton] =
    React.useState<boolean>(true);

  const navigate = useNavigate();

  const handleNextPlayer = () => {
    if (frameCount <= 10 && playerIndex === players.length - 1) {
      setFrameCount(frameCount + 1);
      setPlayerIndex(0);
      setButtonsDisabled(false);
    } else {
      setPlayerIndex(playerIndex + 1);
      setButtonsDisabled(false);
    }
    setTurnCount(0);
    setTotalFrameScore("-");
    setDisableHSButton(true);
    setDisableStrikeButton(false);
  };

  const handleReturnToPlayers = () => {
    navigate("/players");
  };

  if (frameCount === 11) {
    return (
      <GameOver
        players={players}
        setPlayers={setPlayers}
        setFrameCount={setFrameCount}
        setPlayerIndex={setPlayerIndex}
      />
    );
  } else
    return (
      <>
        <h2>{`Frame ${frameCount + 1}`} </h2>

        <CurrentTurn
          players={players}
          setTurnCount={setTurnCount}
          frameCount={frameCount}
          setPlayers={setPlayers}
          playerIndex={playerIndex}
          turnCount={turnCount}
          buttonsDisabled={buttonsDisabled}
          setButtonsDisabled={setButtonsDisabled}
          totalFrameScore={totalFrameScore}
          setTotalFrameScore={setTotalFrameScore}
          disableHSButton={disableHSButton}
          setDisableHSButton={setDisableHSButton}
          disableStrikeButton={disableStrikeButton}
          setDisableStrikeButton={setDisableStrikeButton}
        />

        <div id="playBottomButtonsContainer">
          <button onClick={handleReturnToPlayers} className="playBottomButton">
            Back to Add Players
          </button>
          <button onClick={handleNextPlayer} className="playBottomButton">
            {frameCount === 10 && playerIndex === players.length - 1
              ? "Finish"
              : "Next Player"}
          </button>
        </div>
      </>
    );
}

export default Play;
