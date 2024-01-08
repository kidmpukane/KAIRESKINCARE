import React from "react";
import { HeadingsCustom, BodyTextCustom } from "../atoms/CustomTexts";

const HeaderAndBody = (props) => {
  return (
    <div>
      <HeadingsCustom HeadingTexts=" HEADING WEST..." />
      <BodyTextCustom BodyTexts="This is a body text" />
    </div>
  );
};

export { HeaderAndBody };
