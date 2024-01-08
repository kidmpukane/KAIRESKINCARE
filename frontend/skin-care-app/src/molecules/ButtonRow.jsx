import React from "react";
import { SquareButton } from "../atoms/CustomButtons";

function ButtonRow(props) {
  return (
    <div>
      <SquareButton buttonText="0" buttonStyle={props.buttonStyle} />
      <SquareButton buttonText="1" buttonStyle={props.buttonStyle} />
      <SquareButton buttonText="2" buttonStyle={props.buttonStyle} />
      <SquareButton buttonText="3" buttonStyle={props.buttonStyle} />
      <SquareButton buttonText="4" buttonStyle={props.buttonStyle} />
      <SquareButton buttonText="5" buttonStyle={props.buttonStyle} />
    </div>
  );
}

export default ButtonRow;
