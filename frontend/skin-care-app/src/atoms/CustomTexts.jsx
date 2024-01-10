import React from "react";
import "./atomicStyles.css";

const BodyTextCustom = (props) => {
  return (
    <>
      <span className="bodies">{props.bodyTexts}</span>
      <span className="card-bodies">{props.cardBodyTexts}</span>
    </>
  );
};

const HeadingsCustom = (props) => {
  return (
    <>
      <h1 className={props.className ? props.className : "headings"}>
        {props.headingTexts}
      </h1>
      <h1 className="card-headings">{props.cardHeadingTexts}</h1>
    </>
  );
};

export { HeadingsCustom, BodyTextCustom };
