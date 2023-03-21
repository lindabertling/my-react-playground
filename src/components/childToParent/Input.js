import React, { useState } from "react";
import "./Input.css";

const Input = ({ handleChange }) => {
  const [userInputValue, setUserInputValue] = useState("");

  const getInputValue = (event) => {
    setUserInputValue(event.target.value);
    handleChange(userInputValue);
  };
  return (
    <input
      type="text"
      onChange={getInputValue}
      placeholder="Type your word here"
    ></input>
  );
};

export default Input;
