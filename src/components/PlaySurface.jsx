import React from "react";
import HUD from "./HUD";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
const PlaySurface = () => {
  return (
    <div className="container" style={{ width: "100vw", height: "100vh", maxHeight: "100vh" }}>
      <div className="container" style={{ width: "100vw" }}>
        <HUD />
        <ScoreBoard className="m-auto" />
      </div>
      <GameBoard />
      <HUD className="ml-auto mt-auto" />
    </div>
  );
};

export default PlaySurface;
