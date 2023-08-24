import { FullScoreProps } from "../../customTypes/customTypes";
import { convertNumbers, calculateFrameScore } from "../utils/utils";
import "../Styling/fullScore.scss";

function FullScore({ players, frameCount, setPlayers }: FullScoreProps) {
  console.log(players);
  return (
    <>
      {players.map((player) => {
        return (
          <>
            <p>{player.name}</p>
            <div id="singlePlayerScoreContainer" key={player.name}>
              {player.turns.map((turn) => {
                return (
                  <div className="frameContainer">
                    <div className="outerTurnBox">
                      <div className="innerTurnBox">
                        {convertNumbers(turn[1])}
                      </div>
                      <div className="innerTurnBox">
                        {convertNumbers(turn[0])}
                      </div>
                      <p className="frameTotalScore">
                        {calculateFrameScore(turn[0], turn[1])}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="frameContainer">
                <p>Total</p>
                <p className="PlayerTotalScore">{"10"}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default FullScore;
