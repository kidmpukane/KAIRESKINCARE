import React from "react";
import "./atomicStyles.css";

const RoundButton = (props) => {
  return (
    <button className="round-button" style={props.RoundButtonStyles}>
      {props.buttonText}
    </button>
  );
};

const SquareButton = (props) => {
  return (
    <button className="square-button" style={props.SquareButtonStyles}>
      {props.buttonText}
    </button>
  );
};

export { SquareButton, RoundButton };
