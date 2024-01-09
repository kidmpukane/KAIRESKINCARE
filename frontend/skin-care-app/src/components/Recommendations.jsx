import React from "react";
import "./componentStyles.css";
import RecommendationCard from "../organisms/RecommendationCard";
import { HeadingsCustom } from "../atoms/CustomTexts";

const Recommendations = () => {
  return (
    <div className="recommendations-container">
      <div className="recommendation-header">
        <HeadingsCustom
          headingTexts="RECOMMENDATIONS"
          headingTextStyles={{ fontSize: "9vw" }}
        />
      </div>
      <div className="recommendation-cards">
        <RecommendationCard />
      </div>
    </div>
  );
};

export default Recommendations;
