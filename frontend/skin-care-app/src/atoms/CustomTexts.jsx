import React from "react";
import "./atomicStyles.css";

const BodyTextCustom = (props) => {
  return (
    <>
      <span className="bodies" style={props.bodyTextStyles}>
        {props.BodyTexts}
      </span>
    </>
  );
};

const HeadingsCustom = (props) => {
  return (
    <>
      <h1 className="headings" style={props.headingTextStyles}>
        {props.HeadingTexts}
      </h1>
    </>
  );
};

export { HeadingsCustom, BodyTextCustom };
