import React, { useState, useEffect } from "react";
import "./componentStyles.css";
import FormOrganism from "../organisms/FormOrganism";
import { HeaderAndBody } from "../molecules/HeaderAndBody";
import { RoundButton } from "../atoms/CustomButtons";

const Forms = () => {
  const [myArray, setMyArray] = useState([0]);
  const [iniNum, setIniNum] = useState(0);

  const handleToggle = (number, index) => {
    setMyArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = number;
      return newArray;
    });

    setIniNum(number);
  };

  const handleSubmission = () => {
    console.log("Submitting quiz answers... ", myArray);

    // Replace 'YOUR_ENDPOINT_URL' with the actual URL you want to send data to
    const endpointUrl = "http://127.0.0.1:8000/api/recommendations/predict/";

    fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers: myArray }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Submission successful:", data);
        // Perform any additional actions upon successful submission
      })
      .catch((error) => {
        console.error("Error during submission:", error);
        // Handle error scenarios
      });
  };

  useEffect(() => {
    console.log("quiz-answer:", myArray);
    // No need to call handleSubmission here since it will be triggered by the RoundButton click
  }, [myArray]);

  return (
    <div className="form-container">
      <div className="form-heading-container">
        <HeaderAndBody
          headingTexts="CUSTOMISE"
          headingTextStyles={{ fontSize: "9vw" }}
          bodyTexts="Please fill out this form by answering the survey from one to five depending on how true the question is."
        />
      </div>
      <div className="form-orgs">
        <div className="div-1">
          <FormOrganism
            cardHeadingTexts="SKIN AFTER CLEANSING"
            cardBodyTexts="How does your skin feel after cleansing?"
            btnZero={() => handleToggle(0, 0)}
            btnOne={() => handleToggle(1, 0)}
            btnTwo={() => handleToggle(2, 0)}
            btnThree={() => handleToggle(3, 0)}
            btnFour={() => handleToggle(4, 0)}
            btnFive={() => handleToggle(5, 0)}
          />
        </div>

        <div className="div-2">
          <FormOrganism
            cardHeadingTexts="BREAK-OUTS EXPERIENCES"
            cardBodyTexts="How often do you experience breakouts?"
            btnZero={() => handleToggle(0, 1)}
            btnOne={() => handleToggle(1, 1)}
            btnTwo={() => handleToggle(2, 1)}
            btnThree={() => handleToggle(3, 1)}
            btnFour={() => handleToggle(4, 1)}
            btnFive={() => handleToggle(5, 1)}
          />
        </div>

        <div className="div-3">
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
        </div>

        <div className="div-4">
          <FormOrganism
            cardHeadingTexts="USAGE OF NEW PRODUCTS"
            cardBodyTexts="How does your skin react to new products?"
            btnZero={() => handleToggle(0, 3)}
            btnOne={() => handleToggle(1, 3)}
            btnTwo={() => handleToggle(2, 3)}
            btnThree={() => handleToggle(3, 3)}
            btnFour={() => handleToggle(4, 3)}
            btnFive={() => handleToggle(5, 3)}
          />
        </div>

        <div className="div-5">
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
      <div className="button-div">
        <RoundButton onClick={handleSubmission} roundButtonText="SUBMIT FORM" />
      </div>
    </div>
  );
};

export default Forms;
