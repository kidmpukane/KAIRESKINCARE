import React from "react";
import "./componentStyles.css";
import FormOrganism from "../organisms/FormOrganism";
import { HeaderAndBody } from "../molecules/HeaderAndBody";

const Forms = () => {
  return (
    <div className="form-container">
      <div className="form-heading-container">
        {" "}
        <HeaderAndBody
          headingTexts="CUSTOMISE"
          headingTextStyles={{ fontSize: "9vw" }}
          bodyTexts="Pleas fill out this form by answering thr survey from one to five depending on how true the question is."
        />
      </div>
      <div className="form-orgs">
        <FormOrganism />
      </div>
    </div>
  );
};

export default Forms;
