import React from "react";
import "./componentStyles.css";
import RecommendationCard from "../organisms/RecommendationCard";
import { HeadingsCustom } from "../atoms/CustomTexts";

const Recommendations = (props) => {
  return (
    <div className="recommendations-container">
      <div className="recommendation-cards">
        <RecommendationCard
          cardHeadingTexts={props.cardHeadingTexts}
          cardBodyTexts={props.cardBodyTexts}
        />
      </div>
    </div>
  );
};

export default Recommendations;
