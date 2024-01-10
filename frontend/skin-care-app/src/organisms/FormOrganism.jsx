import React, { useState } from "react";
import "./organismStyles.css";
import { CardHeaderAndBody } from "../molecules/HeaderAndBody";
import { SquareButton } from "../atoms/CustomButtons";

function FormOrganism(props) {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const handleClick = (number) => {
    setSelectedNumber(number);
  };
  return (
    <div className="form-organism-container">
      <div className="molecular-header">
        <CardHeaderAndBody
          cardHeadingTexts="Acne"
          cardBodyTexts="Are you an expert, would you just like to see what it is that we have to offer?"
        />
      </div>
      <div className="form-button-container">
        <SquareButton onClick={() => handleClick(0)} squareButtonText="0" />
        <SquareButton onClick={() => handleClick(1)} squareButtonText="1" />
        <SquareButton onClick={() => handleClick(2)} squareButtonText="2" />
        <SquareButton onClick={() => handleClick(3)} squareButtonText="3" />
        <SquareButton onClick={() => handleClick(4)} squareButtonText="4" />
        <SquareButton onClick={() => handleClick(5)} squareButtonText="5" />
      </div>
      <button onClick={() => console.log("Bitten Help Me Bitten!!!")}>
        Bitten
      </button>
    </div>
  );
}

export default FormOrganism;
