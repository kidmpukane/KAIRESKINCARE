import React from "react";
import "./atomicStyles.css";

const BodyTextCustom = ({ props }) => {
  return (
    <>
      <span className="bodies" style={props.BodyStyles}>
        Hi I am supposed to be a body text to represent or rather display how
        things ought to look when I am complete.
      </span>
    </>
  );
};

const HeadingsCustom = ({ props }) => {
  return (
    <>
      <h1 style={props.HeadingStyles} className="headings">
        Hello I Am A Heading
      </h1>
    </>
  );
};

export { HeadingsCustom, BodyTextCustom };
