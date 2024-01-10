import React from "react";
import "./atomicStyles.css";

const RoundButton = (props) => {
  return (
    <button
      className="round-button"
      style={props.roundButtonStyles}
      onPress={props.onPress}
    >
      {props.roundButtonText}
    </button>
  );
};

const SquareButton = (props) => {
  return (
    <button className="square-button" onClick={props.onClick}>
      {props.squareButtonText}
    </button>
  );
};

export { SquareButton, RoundButton };
