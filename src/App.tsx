import "./App.scss";
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
  const [frameCount, setFrameCount] = React.useState<number>(0);

  return (
    <>
      <h1>Bowling Score Card!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/players"
          element={
            <Players
              players={players}
              setPlayers={setPlayers}
              frameCount={frameCount}
              setFrameCount={setFrameCount}
            />
          }
        />
        <Route
          path="/play"
          element={
            <Play
              players={players}
              setPlayers={setPlayers}
              frameCount={frameCount}
              setFrameCount={setFrameCount}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
