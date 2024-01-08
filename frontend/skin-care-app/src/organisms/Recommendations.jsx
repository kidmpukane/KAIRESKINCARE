import React from "react";
import "./organismStyles.css";
import CustomImages from "../atoms/CustomImages";
import { HeaderAndBody } from "../molecules/HeaderAndBody";
import { HeadingsCustom } from "../atoms/CustomTexts";
import MolecularProgressBar from "../molecules/MolecularProgressBar";

function Recommendations() {
  return (
    <div className="recommendations-container">
      <div className="left-div">
        <CustomImages
          src={
            "https://plus.unsplash.com/premium_photo-1702273505247-93668f78c301?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Nothing To Display"
        />
      </div>
      <div className="right-div">
        <HeaderAndBody
          headingTexts="Recommended Products"
          bodyTexts="This is the product that we have recommended for you, depending on the information that we received."
        />
        <HeadingsCustom headingTexts="Typical Product Name" />
        <MolecularProgressBar />
      </div>
    </div>
  );
}

export default Recommendations;
