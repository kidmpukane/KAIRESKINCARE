import React, { useState, useEffect } from "react";
import "./componentStyles.css";
import FormOrganism from "../organisms/FormOrganism";
import { HeaderAndBody } from "../molecules/HeaderAndBody";

const Forms = () => {
  const [toggleBtn, setToggleBtn] = useState();
  const [myArray, setMyArray] = useState([0]);
  const [iniNum, setIniNum] = useState(0);

  const handleToggle = (number, index) => {
    // Use setMyArray to update the state
    setMyArray((prevArray) => {
      const newArray = [...prevArray]; // Create a copy of the array
      newArray[index] = number; // Update the specific index with the new number

      return newArray;
    });

    // Update iniNum
    setIniNum(number);
  };

  // Log myArray after each update
  useEffect(() => {
    console.log("quiz-answer:", myArray);
  }, [myArray]);

  return (
    <div className="form-container">
      <div className="form-heading-container">
        <HeaderAndBody
          headingTexts="CUSTOMIZE"
          headingTextStyles={{ fontSize: "9vw" }}
          bodyTexts="Please fill out this form by answering the survey from one to five depending on how true the question is."
        />
      </div>
      <div className="form-orgs">
        <FormOrganism
          cardHeadingTexts="CLEANSING"
          cardBodyTexts="How does your skin feel after cleansing?"
          btnZero={() => handleToggle(0, 0)}
          btnOne={() => handleToggle(1, 0)}
          btnTwo={() => handleToggle(2, 0)}
          btnThree={() => handleToggle(3, 0)}
          btnFour={() => handleToggle(4, 0)}
          btnFive={() => handleToggle(5, 0)}
        />
        <FormOrganism
          cardHeadingTexts="BREAK-OUTS"
          cardBodyTexts="How often do you experience breakouts?"
          btnZero={() => handleToggle(0, 1)}
          btnOne={() => handleToggle(1, 1)}
          btnTwo={() => handleToggle(2, 1)}
          btnThree={() => handleToggle(3, 1)}
          btnFour={() => handleToggle(4, 1)}
          btnFive={() => handleToggle(5, 1)}
        />
        <FormOrganism
          cardHeadingTexts="SKIN DURING THE DAY"
          cardBodyTexts="How does your skin feel midday?"
          btnZero={() => handleToggle(0, 2)}
          btnOne={() => handleToggle(1, 2)}
          btnTwo={() => handleToggle(2, 2)}
          btnThree={() => handleToggle(3, 2)}
          btnFour={() => handleToggle(4, 2)}
          btnFive={() => handleToggle(5, 2)}
        />
        <FormOrganism
          cardHeadingTexts="NEW PRODUCTS"
          cardBodyTexts="How does your skin react to new products?"
          btnZero={() => handleToggle(0, 3)}
          btnOne={() => handleToggle(1, 3)}
          btnTwo={() => handleToggle(2, 3)}
          btnThree={() => handleToggle(3, 3)}
          btnFour={() => handleToggle(4, 3)}
          btnFive={() => handleToggle(5, 3)}
        />
        <FormOrganism
          cardHeadingTexts="SKIN IN HARSH WEATHER"
          cardBodyTexts="How does your skin feel in harsh weather?"
          btnZero={() => handleToggle(0, 4)}
          btnOne={() => handleToggle(1, 4)}
          btnTwo={() => handleToggle(2, 4)}
          btnThree={() => handleToggle(3, 4)}
          btnFour={() => handleToggle(4, 4)}
          btnFive={() => handleToggle(5, 4)}
        />
      </div>
    </div>
  );
};

export default Forms;
