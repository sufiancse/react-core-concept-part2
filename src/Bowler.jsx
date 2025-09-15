import { useState } from "react";

export default function Bowler() {
  const [balls, setBalls] = useState(0);
  const [run, setRuns] = useState(0);
  function ball() {
    setBalls(balls + 1);

    const runs = Math.ceil(Math.random() * 6);
    alert(`Run this ball: ${runs}`);
    setRuns(run + runs);
  }

  function wideNo(e) {
    if (e.target.textContent == "No Ball") {
      const freeHit = Math.ceil(Math.random() * 6);
      setRuns(run + 1 + freeHit);
      alert(`${e.target.textContent} & Free Hit: ${freeHit} Runs`);
    } else {
      setRuns(run + 1);
      alert(`${e.target.textContent}`);
    }
  }

  function restart() {
    setBalls(0);
    setRuns(0);
  }

  let totalBalls;
  let reStart;
  if (balls < 6) {
    totalBalls = (
      <>
        <button onClick={ball}>Click Here to Ball</button>

        <button onClick={wideNo}>Wide Ball</button>
        <button onClick={wideNo}>No Ball</button>
      </>
    );
  } else {
    totalBalls = <h3 style={{ color: "red" }}>Over Complete</h3>;
    reStart = <button onClick={restart}>Restart</button>;
  }
  return (
    <>
      <h1 style={{ color: "red" }}>Score Board</h1>
      <h1 style={{ color: "darkgreen" }}>Runs: {run}</h1>
      <h2>Total Ball: {balls}</h2>

      {totalBalls}
      {reStart}
    </>
  );
}
