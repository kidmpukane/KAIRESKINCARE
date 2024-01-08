import React from "react";
import "./atomicStyles.css";

const BodyTextCustom = (props) => {
  return (
    <>
      <span className="bodies" style={props.bodyTextStyles}>
        {props.bodyTexts}
      </span>
    </>
  );
};

const HeadingsCustom = (props) => {
  return (
    <>
      <h1 className="headings" style={props.headingTextStyles}>
        {props.headingTexts}
      </h1>
    </>
  );
};

export { HeadingsCustom, BodyTextCustom };
