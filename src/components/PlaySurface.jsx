import React from "react";
import HUD from "./HUD";
import GameBoard from "./GameBoard";

const PlaySurface = () => {
  return (
    <div className="container" style={{ width: "100vw", height: "100vh", maxHeight: "100vh" }}>
      <HUD />
      <GameBoard />
      <HUD />
    </div>
  );
};

export default PlaySurface;
