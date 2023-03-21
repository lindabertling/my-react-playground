import React, { useState } from "react";
import "./Child.css";
import Form from "./Form";

const Child = ({ changeWord }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    changeWord(userInput);
  };

  const handleUserInput = (userInputText) => {
    setUserInput(userInputText);
  };

  return (
    <div className="child">
      <h1>Child</h1>
      <Form
        handleSubmit={handleSubmit}
        handleUserInput={handleUserInput}
        btnTitle="Click here to change the word"
      ></Form>
    </div>
  );
};

export default Child;
