import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ handleChange }) => {
  const [userInputValue, setUserInputValue] = useState("");

  useEffect(() => {
    handleChange(userInputValue);
  }, [userInputValue, handleChange]);

  const getInputValue = (event) => {
    setUserInputValue(event.target.value);
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
