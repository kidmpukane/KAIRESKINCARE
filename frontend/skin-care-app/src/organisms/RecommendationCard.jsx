import React from "react";
import "./organismStyles.css";
import CustomImages from "../atoms/CustomImages";
import { CardHeaderAndBody } from "../molecules/HeaderAndBody";
import { HeadingsCustom } from "../atoms/CustomTexts";
// import MolecularProgressBar from "../molecules/MolecularProgressBar";
import productImage from "../assets/Rectangle 112.png";

function RecommendationCard() {
  return (
    <div className="recommendations-card-container">
      <div className="left-div">
        <CustomImages src={productImage} alt="Nothing To Display" />
      </div>
      <div className="right-div">
        <CardHeaderAndBody
          cardHeadingTexts="RECOMMENDED PRODUCTS"
          cardBodyTexts="This is the product that we have recommended for you, depending on the information that we received."
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
