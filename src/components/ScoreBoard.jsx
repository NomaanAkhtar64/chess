import React from "react";

const ScoreBoard = ({ className }) => {
  return (
    <div className={className ? `score-board ${className}` : "score-board"}>
      SCOREBOARD
    </div>
  );
};

export default ScoreBoard;
