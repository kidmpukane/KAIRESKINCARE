import React from "react";
import "./molecularStyles.css";
import { SquareButton } from "../atoms/CustomButtons";

function ButtonRow(props) {
  return (
    <div className="button-row-container">
      <SquareButton squareButtonText="0" onPress={props.onPress} />
      <SquareButton squareButtonText="1" onPress={props.onPress} />
      <SquareButton squareButtonText="2" onPress={props.onPress} />
      <SquareButton squareButtonText="3" onPress={props.onPress} />
      <SquareButton squareButtonText="4" onPress={props.onPress} />
      <SquareButton squareButtonText="5" onPress={props.onPress} />
    </div>
  );
}

export default ButtonRow;
