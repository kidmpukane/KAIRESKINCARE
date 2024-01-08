import React from "react";
import "./molecularStyles.css";
import ProgressBar from "../atoms/ProgressBar";
import { HeadingsCustom } from "../atoms/CustomTexts";

const MolecularProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <ProgressBar />
      <HeadingsCustom className="headings" headingTexts="96%" />
    </div>
  );
};

export default MolecularProgressBar;
