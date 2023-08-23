import "./App.css";
import Players from "./components/Players";
import Home from "./components/Home";
import Play from "./components/Play";
import React from "react";
import { Player } from "../customTypes/customTypes";
import { Routes, Route } from "react-router-dom";

function App() {
  const [players, setPlayers] = React.useState<Player[]>([
    { name: "tim", turns: [] },
    { name: "aimee", turns: [] },
    { name: "teddy", turns: [] },
  ]);

  console.log(players);
  return (
    <>
      <h1>Bowling Score Calculator!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/players"
          element={<Players players={players} setPlayers={setPlayers} />}
        />
        <Route
          path="/play"
          element={<Play players={players} setPlayers={setPlayers} />}
        />
      </Routes>
    </>
  );
}

export default App;
