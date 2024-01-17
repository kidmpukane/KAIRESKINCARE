import React, { useState } from "react";
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
  const [bttnColour, setBttnColour] = useState("square-button");

  const changeColour = () => {
    setBttnColour((prevColor) =>
      prevColor === "square-button" ? "green-button" : "square-button"
    );
  };

  return (
    <button
      className={bttnColour}
      onClick={() => {
        props.onClick();
        changeColour();
      }}
    >
      {props.squareButtonText}
    </button>
  );
};
export { SquareButton, RoundButton };
