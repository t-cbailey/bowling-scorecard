import React from "react";
import { PlayersProps } from "../../customTypes/customTypes";
import { useNavigate } from "react-router-dom";

function Players({ players, setPlayers, setFrameCount }: PlayersProps) {
  const [name, setName] = React.useState("");
  const [startButtonDisabled, setStartButtonDisabled] = React.useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (players.length === 5) {
      return alert("Max 5 players");
    } else {
      if (name.length > 0) {
        setPlayers([...players, { name: name, frames: [], totalScore: "0" }]);
        setName("");
      }
    }
  };

  const handleRemovePlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).value;

    setPlayers(
      players.filter((player) => {
        return player.name !== targetName;
      })
    );
  };

  const handleStartGame = () => {
    navigate("/play");
  };

  const handleReset = () => {
    setPlayers([]);
    setFrameCount(0);
    navigate("/");
  };

  React.useEffect(() => {
    players.length < 1
      ? setStartButtonDisabled(true)
      : setStartButtonDisabled(false);
  }, [players]);
  return (
    <>
      <h1>players</h1>
      <ul>Current Players</ul>
      {players.map((player) => {
        return (
          <div key={player.name}>
            <li>{player.name}</li>
            <button value={player.name} onClick={handleRemovePlayer}>
              X
            </button>
          </div>
        );
      })}
      <form>
        <input type="text" value={name} onChange={handleNameChange} />
        <button onClick={addPlayer}>Add</button>
      </form>
      <button disabled={startButtonDisabled} onClick={handleStartGame}>
        Start Game!
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Players;
