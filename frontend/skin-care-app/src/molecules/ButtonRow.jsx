import React from "react";
import "./molecularStyles.css";
import { SquareButton } from "../atoms/CustomButtons";

function ButtonRow(props) {
  return (
    <div className="button-row-container">
      <SquareButton squareButtonText="0" onClick={props.onClick} />
      <SquareButton squareButtonText="1" onClick={props.onClick} />
      <SquareButton squareButtonText="2" onClick={props.onClick} />
      <SquareButton squareButtonText="3" onClick={props.onClick} />
      <SquareButton squareButtonText="4" onClick={props.onClick} />
      <SquareButton squareButtonText="5" onClick={props.onClick} />
    </div>
  );
}

export default ButtonRow;
