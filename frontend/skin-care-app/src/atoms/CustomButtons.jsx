import React from "react";
import "./atomicStyles.css";

const RoundButton = (props) => {
  return (
    <button
      type={props.type}
      className={
        props.className ? `${props.className} round-button` : "round-button"
      }
      onClick={props.onClick}
    >
      {props.roundButtonText}
    </button>
  );
};

const SquareButton = (props) => {
  return (
    <button
      className={
        props.className ? `${props.className} square-button` : "square-button"
      }
      onClick={props.onClick}
    >
      {props.squareButtonText}
    </button>
  );
};

export { SquareButton, RoundButton };
