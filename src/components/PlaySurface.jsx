import React from "react";
import HUD from "./HUD";
import GameBoard from "./GameBoard";

const PlaySurface = () => {
  return (
    <div style={{
      background: "#333",
      width: "100vw",
      height: "100vh",
      maxHeight: "100vh",
    }}>
      < HUD isUser={false} />
      <GameBoard />
      <HUD isUser={true} />
    </div >
  );
};

export default PlaySurface;
