import React from "react";
import "./UIScreen.css";

const UIScreen = ({ onPlayRequest, onSettingsRequest, onQuitRequest }) => {
  return (
    <div className="ui-screen">
      <div className="logo-title">
        <div className="logo">LOGO HERE</div>
        <h2>Chess</h2>
      </div>
      <div className="controls">
        <button className="primary" onClick={onPlayRequest}>
          Play
        </button>
        <button className="secondary" onClick={onSettingsRequest}>
          Settings
        </button>
        <button className="danger" onClick={onQuitRequest}>
          Quit
        </button>
      </div>
    </div>
  );
};

export default UIScreen;
