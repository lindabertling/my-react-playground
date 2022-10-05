import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [userInputValue, setUserInputValue] = useState("");
  const getInputValue = (event) => {
    setUserInputValue(event.target.value);
    console.log(userInputValue);
  };
  return <input type={"text"} onChange={getInputValue}></input>;
};

export default Input;
