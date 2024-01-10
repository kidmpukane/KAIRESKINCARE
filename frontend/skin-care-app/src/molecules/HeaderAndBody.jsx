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

const CardHeaderAndBody = (props) => {
  return (
    <div>
      <HeadingsCustom cardHeadingTexts={props.cardHeadingTexts} />
      <BodyTextCustom cardBodyTexts={props.cardBodyTexts} />
    </div>
  );
};

export { HeaderAndBody, CardHeaderAndBody };
