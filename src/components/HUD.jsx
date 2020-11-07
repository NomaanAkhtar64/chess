import React from "react";
import "./HUD.css";

const HUD = ({ isUser }) => {
  return (
    <div className={isUser ? "hud user" : "hud opponent"}>
      HUD
    </div>
  );
};

export default HUD;
