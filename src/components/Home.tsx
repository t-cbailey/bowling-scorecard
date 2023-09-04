import { useNavigate } from "react-router-dom";
import bowling from "../assets/imgs/bowling.svg";
import "../Styling/home.scss";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/players");
  };
  return (
    <>
      <div id="homeContainer">
        <img id="homeImg" src={bowling} alt="bowling ball" />
        <article id="homeText">
          Use Ten Pin Tracker to record the bowling scores of multiple players!
        </article>
      </div>
      <button id="startButton" onClick={handleGetStarted}>
        Get Started!
      </button>
    </>
  );
}

export default Home;
