import React from "react";

const HUD = ({ className }) => {
  return (
    <div
      style={{ width: "fit-content" }}
      className={className ? `hud ${className}` : "hud"}
    >
      HUD
    </div>
  );
};

export default HUD;
