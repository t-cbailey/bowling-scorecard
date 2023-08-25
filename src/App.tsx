import "./App.scss";
import Players from "./components/Players";
import Home from "./components/Home";
import Play from "./components/Play";
import FullScore from "./components/FullScore";
import React from "react";
import { Player } from "../customTypes/customTypes";
import { Routes, Route } from "react-router-dom";

function App() {
  const [frameCount, setFrameCount] = React.useState<number>(0);
  const [players, setPlayers] = React.useState<Player[]>([
    {
      name: "tim",
      frames: [
        // ["10", "0"],
        // ["7", "3"],
        // ["3", "4"],
        // ["5", "5"],
      ],
      totalScore: "0",
    },
    {
      name: "aimee",
      frames: [
        // ["10", "0"],
        // ["1", "2"],
        // ["0", "10"],
        // ["1", "6"],
      ],
      totalScore: "0",
    },
    {
      name: "teddy",
      frames: [
        // ["10", "0"],
        // ["1", "2"],
        // ["1", "4"],
        // ["5", "2"],
      ],
      totalScore: "0",
    },
  ]);

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
        <Route
          path="/fullscore"
          element={
            <FullScore
              players={players}
              setPlayers={setPlayers}
              frameCount={frameCount}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
