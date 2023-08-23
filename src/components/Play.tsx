import { PlayProps } from "../../customTypes/customTypes";
import { useNavigate } from "react-router-dom";
import React from "react";
import GameOver from "./GameOver";

function Play({ players, setPlayers }: PlayProps) {
  const navigate = useNavigate();
  const [playerIndex, setPlayerIndex] = React.useState<number>(0);
  const [frameCount, setFrameCount] = React.useState<number>(0);

  const currentPlayer = players[playerIndex].name;

  const handleNextPlayer = () => {
    if (frameCount <= 10 && playerIndex === players.length - 1) {
      setFrameCount(frameCount + 1);
      setPlayerIndex(0);
    } else {
      setPlayerIndex(playerIndex + 1);
    }
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
        <h2>{`Frame ${frameCount}`} </h2>
        <h2>{`${currentPlayer}'s turn`}</h2>

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
