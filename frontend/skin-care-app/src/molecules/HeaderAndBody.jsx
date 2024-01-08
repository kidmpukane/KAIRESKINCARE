import React from "react";
import { HeadingsCustom, BodyTextCustom } from "../atoms/CustomTexts";

const HeaderAndBody = (props) => {
  return (
    <div>
      <HeadingsCustom
        headingTexts={props.headingTexts}
        headingTextStyles={props.headingTextStyles}
      />
      <BodyTextCustom
        bodyTexts={props.bodyTexts}
        bodyTextStyles={props.bodyTextStyles}
      />
    </div>
  );
};

export { HeaderAndBody };
