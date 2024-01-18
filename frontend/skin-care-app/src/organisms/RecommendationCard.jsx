import React from "react";
import "./organismStyles.css";
import CustomImages from "../atoms/CustomImages";
import { CardHeaderAndBody } from "../molecules/HeaderAndBody";
import { HeadingsCustom } from "../atoms/CustomTexts";
// import MolecularProgressBar from "../molecules/MolecularProgressBar";
import productImage from "../assets/Rectangle 112.png";

function RecommendationCard(props) {
  return (
    <div className="recommendations-card-container">
      <div className="left-div">
        <CustomImages src={props.src} alt="Nothing To Display" />
      </div>
      <div className="right-div">
        <CardHeaderAndBody
          cardHeadingTexts={props.cardHeadingTexts}
          cardBodyTexts={props.cardBodyTexts}
        />
        {/* <HeadingsCustom
          className={"mobile-text"}
          headingTexts="Typical Product Name"
        />
        <MolecularProgressBar /> */}
      </div>
    </div>
  );
}

export default RecommendationCard;
