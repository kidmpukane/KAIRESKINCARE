import React from "react";
import "./atomicStyles.css";

const BodyTextCustom = (props) => {
  return (
    <>
      <span className="bodies" style={props.BodyStyles}>
        {props.BodyTexts}
      </span>
    </>
  );
};

const HeadingsCustom = (props) => {
  return (
    <>
      <h1 style={props.HeadingStyles} className="headings">
        {props.HeadingTexts}
      </h1>
    </>
  );
};

export { HeadingsCustom, BodyTextCustom };
