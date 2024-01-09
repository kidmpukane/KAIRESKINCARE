import React from "react";
import "./pageStyles.css";
import Forms from "../components/Forms";
import Recommendations from "../components/Recommendations";

const CustomisationPage = () => {
  return (
    <div className="customisation-page-container">
      <div className="customisation-form">
        <Forms />
      </div>
      <div className="customisation-rec">
        <Recommendations />
      </div>
    </div>
  );
};

export default CustomisationPage;
