import React from "react";
import "./molecularStyles.css";
import { SquareButton } from "../atoms/CustomButtons";

function ButtonRow(props) {
  return (
    <div className="button-row-container">
      <SquareButton
        squareButtonText="0"
        squareButtonStyles={props.squareButtonStyles}
        onPress={props.onPress}
      />
      <SquareButton
        squareButtonText="1"
        squareButtonStyles={props.squareButtonStyles}
        onPress={props.onPress}
      />
      <SquareButton
        squareButtonText="2"
        squareButtonStyles={props.squareButtonStyles}
        onPress={props.onPress}
      />
      <SquareButton
        squareButtonText="3"
        squareButtonStyles={props.squareButtonStyles}
        onPress={props.onPress}
      />
      <SquareButton
        squareButtonText="4"
        squareButtonStyles={props.squareButtonStyles}
        onPress={props.onPress}
      />
      <SquareButton
        squareButtonText="5"
        squareButtonStyles={props.squareButtonStyles}
        onPress={props.onPress}
      />
    </div>
  );
}

export default ButtonRow;
