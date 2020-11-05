import React from "react";
import "./UIScreen.css";

const UIScreen = ({ onPlayRequest, onSettingsRequest, onQuitRequest }) => {
  return (
    <div className="ui-screen ">
      <div className="logo-title">
        <div className="logo">
          <svg
            width="46"
            height="46"
            viewBox="0 0 237 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 231.053H28.9474V195.531L46.0957 173.483V68.1435L22.823 46.0957V2H55.8947V17.9234H97.5407V2H141.636V17.9234H182.057V2H216.354V46.0957L194.306 68.1435V173.483L207.78 195.531V231.053H234.727V258H2V231.053Z"
              fill="#ad5428"
            />
            <path
              d="M28.9474 231.053H2V258H234.727V231.053H207.78M28.9474 231.053V195.531L46.0957 173.483M28.9474 231.053H207.78M46.0957 173.483V68.1435M46.0957 173.483H194.306M46.0957 68.1435L22.823 46.0957M46.0957 68.1435H194.306M22.823 46.0957V2H55.8947V17.9234H97.5407V2H141.636V17.9234H182.057V2H216.354V46.0957M22.823 46.0957H216.354M216.354 46.0957L194.306 68.1435M194.306 68.1435V173.483M194.306 173.483L207.78 195.531V231.053"
              stroke="#ccc"
              stroke-width="7"
            />
          </svg>
        </div>
        <h1 style={{ marginLeft: "20px" }}>Chess</h1>
      </div>
      <div className="controls">
        <button className="b2 p-fh outline primary" onClick={onPlayRequest}>
          Play
        </button>
        <button
          className="b2 p-fh outline secondary"
          onClick={onSettingsRequest}
        >
          Settings
        </button>
        <button className="b2 p-fh outline danger" onClick={onQuitRequest}>
          Quit
        </button>
      </div>
    </div>
  );
};

export default UIScreen;
