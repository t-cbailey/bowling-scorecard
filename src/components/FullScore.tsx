import React from "react";
import { FullScoreProps } from "../../customTypes/customTypes";
import { convertNumbers, calculateFrameScore } from "../utils/utils";
import "../Styling/fullScore.scss";

function FullScore({ players, frameCount, setPlayers }: FullScoreProps) {
  return (
    <>
      <ul>
        {players.map((player) => {
          return (
            <React.Fragment key={player.name}>
              <li>{player.name}</li>
              <ul id="singlePlayerScoreContainer">
                {player.turns.map((turn, index) => {
                  return (
                    <li key={player.name + index} className="frameContainer">
                      <div className="outerTurnBox">
                        <div className="innerTurnBox">
                          {convertNumbers(turn[1] || "0", 1)}
                        </div>
                        <div className="innerTurnBox">
                          {convertNumbers(turn[0], 0)}
                        </div>
                        <p className="frameTotalScore">
                          {calculateFrameScore(turn[0], turn[1] || "0")}
                        </p>
                      </div>
                    </li>
                  );
                })}
                <li className="frameContainer">
                  <p>Total</p>
                  <p className="PlayerTotalScore">{"10"}</p>
                </li>
              </ul>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default FullScore;
