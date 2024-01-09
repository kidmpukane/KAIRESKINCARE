import React from "react";
import "./molecularStyles.css";
import ProgressBar from "../atoms/ProgressBar";
import { HeadingsCustom } from "../atoms/CustomTexts";

const MolecularProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <ProgressBar />
      <HeadingsCustom className="progress-bar-headings" headingTexts="95%" />
    </div>
  );
};

export default MolecularProgressBar;
