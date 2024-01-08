import React from "react";
import "./molecularStyles.css"; // Assuming you have a CSS file named ProgressBar.css

const ProgressBar = ({ progress }) => {
  const progressPercentage = progress + "%";

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: "85%" }}></div>
    </div>
  );
};

export default ProgressBar;
