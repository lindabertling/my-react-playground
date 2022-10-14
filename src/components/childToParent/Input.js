import React, { useState } from "react";
import "./Input.css";

const Input = ({ onSubmit }) => {
  const [userInputValue, setUserInputValue] = useState("");
  const getInputValue = (event) => {
    setUserInputValue(event.target.value);
    console.log(userInputValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={getInputValue}></input>
    </form>
  );
};

export default Input;
