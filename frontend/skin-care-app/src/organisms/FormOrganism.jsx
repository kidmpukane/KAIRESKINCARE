import React from "react";
import "./organismStyles.css";
import { HeaderAndBody } from "../molecules/HeaderAndBody";
import ButtonRow from "../molecules/ButtonRow";

function FormOrganism(props) {
  return (
    <div>
      <HeaderAndBody
        headingTexts="Acne"
        headingTextStyles={{ fontSize: "4rem" }}
        bodyTexts="Are you an expert, would you just like to see what it is that we have to offer?"
      />
      <div className="form-button-container">
        <ButtonRow onPress={props.onPress} />
      </div>
    </div>
  );
}

export default FormOrganism;
