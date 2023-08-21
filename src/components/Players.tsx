import React from "react";

function Players() {
  interface player {
    name: string;
  }

  const [players, setPlayers] = React.useState<player[]>([]);
  const [name, setName] = React.useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (players.length === 5) {
      return alert("Max 5 players");
    } else {
      if (name.length > 0) {
        setPlayers([...players, { name: name }]);
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
    </>
  );
}

export default Players;
