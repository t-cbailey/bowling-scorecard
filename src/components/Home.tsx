import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/players");
  };
  return (
    <>
      <h1>welcome</h1>
      <button onClick={handleGetStarted}>Get Started!</button>
    </>
  );
}

export default Home;
