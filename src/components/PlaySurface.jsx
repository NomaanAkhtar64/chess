import React from "react";
import HUD from "./HUD";
import ScoreBoard from "./ScoreBoard";

const PlaySurface = () => {
  return (
    <div className="container" style={{ width: "100vw", height: "100vh" }}>
      <div className="container" style={{ width: "100vw" }}>
        <HUD />
        <ScoreBoard className="m-auto" />
      </div>

      <HUD className="ml-auto mt-auto" />
    </div>
  );
};

export default PlaySurface;
