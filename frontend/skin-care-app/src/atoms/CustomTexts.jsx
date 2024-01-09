import React from "react";
import "./atomicStyles.css";

const BodyTextCustom = (props) => {
  return (
    <>
      <span className="bodies">{props.bodyTexts}</span>
    </>
  );
};

const HeadingsCustom = (props) => {
  return (
    <>
      <h1 className="headings">{props.headingTexts}</h1>
    </>
  );
};

export { HeadingsCustom, BodyTextCustom };
