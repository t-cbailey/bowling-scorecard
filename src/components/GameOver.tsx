import { GameOverProps } from "../../customTypes/customTypes";
import { useNavigate } from "react-router-dom";
function GameOver({
  players,
  setPlayers,
  setFrameCount,
  setPlayerIndex,
}: GameOverProps) {
  const navigate = useNavigate();
  const handlePlayAgain = () => {
    setFrameCount(0);
    setPlayerIndex(0);
    navigate("/play");
  };

  const handleReset = () => {
    setPlayers([]);
    setFrameCount(0);
    navigate("/");
  };
  return (
    <>
      <h1>Game Over</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default GameOver;
