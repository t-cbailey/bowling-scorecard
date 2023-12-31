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
  const [players, setPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    const unloadCallback = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <>
      <h1>Ten Pin Tracker</h1>
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
