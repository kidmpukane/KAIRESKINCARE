import React from "react";
import "./organismStyles.css";
import { HeaderAndBody } from "../molecules/HeaderAndBody";
import ButtonRow from "../molecules/ButtonRow";

function FormOrganism(props) {
  return (
    <div className="form-organism-container">
      <div className="molecular-header">
        <HeaderAndBody
          headingTexts="Acne"
          bodyTexts="Are you an expert, would you just like to see what it is that we have to offer?"
        />
      </div>
      <div className="form-button-container">
        <ButtonRow onPress={props.onPress} />
      </div>
    </div>
  );
}

export default FormOrganism;
