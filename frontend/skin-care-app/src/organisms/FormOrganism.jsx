import React, { useState } from "react";
import "./organismStyles.css";
import { CardHeaderAndBody } from "../molecules/HeaderAndBody";
import { SquareButton } from "../atoms/CustomButtons";

function FormOrganism(props) {
  return (
    <div className="form-organism-container">
      <div className="molecular-header">
        <CardHeaderAndBody
          cardHeadingTexts={props.cardHeadingTexts}
          cardBodyTexts={props.cardBodyTexts}
        />
      </div>
      <div className="form-button-container">
        <SquareButton onClick={props.btnZero} squareButtonText="0" />
        <SquareButton onClick={props.btnOne} squareButtonText="1" />
        <SquareButton onClick={props.btnTwo} squareButtonText="2" />
        <SquareButton onClick={props.btnThree} squareButtonText="3" />
        <SquareButton onClick={props.btnFour} squareButtonText="4" />
        <SquareButton onClick={props.btnFive} squareButtonText="5" />
      </div>
    </div>
  );
}

export default FormOrganism;
