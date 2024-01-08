import React from "react";
import { HeadingsCustom, BodyTextCustom } from "../atoms/CustomTexts";

const HeaderAndBody = (props) => {
  return (
    <div>
      <HeadingsCustom
        headingTexts=" HEADING WEST..."
        headingTextStyles={props.headingTextStyles}
      />
      <BodyTextCustom
        bodyTexts="This is a body text"
        bodyTextStyles={props.bodyTextStyles}
      />
    </div>
  );
};

export { HeaderAndBody };
