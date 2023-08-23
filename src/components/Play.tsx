import { PlayProps, turnCount } from "../../customTypes/customTypes";
import { useNavigate } from "react-router-dom";
import React from "react";
import GameOver from "./GameOver";
import CurrentTurn from "./CurrentTurn";

function Play({ players, setPlayers }: PlayProps) {
  const [playerIndex, setPlayerIndex] = React.useState<number>(0);
  const [frameCount, setFrameCount] = React.useState<number>(0);
  const [turnCount, setTurnCount] = React.useState<turnCount>(0);
  const [buttonsDisabled, setButtonsDisabled] = React.useState<boolean>(false);

  const currentPlayer = players[playerIndex].name;
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
        <h1>Play!</h1>
        <h2>{`Frame ${frameCount + 1}`} </h2>
        <h2>{`${currentPlayer}'s turn`}</h2>
        <CurrentTurn
          players={players}
          setTurnCount={setTurnCount}
          frameCount={frameCount}
          setPlayers={setPlayers}
          playerIndex={playerIndex}
          turnCount={turnCount}
          buttonsDisabled={buttonsDisabled}
          setButtonsDisabled={setButtonsDisabled}
        />

        <button onClick={handleNextPlayer}>
          {frameCount === 10 && playerIndex === players.length - 1
            ? "Finish"
            : "Next Player"}
        </button>
        <button onClick={handleReturnToPlayers}>Back to Add Players</button>
      </>
    );
}

export default Play;
