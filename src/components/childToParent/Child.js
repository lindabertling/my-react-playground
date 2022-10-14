import React, { useState } from "react";
import Button from "./Button";
import "./Child.css";
import Input from "./Input";

const Child = ({ changeWord }) => {
  const [word, setWord] = useState("Lusen");

  const handleSubmit = function (inputWord) {
    setWord(inputWord);
  };

  return (
    <div className="child">
      <h1>Child</h1>
      <Input onSubmit={(newWord) => handleSubmit(newWord)} />
      <Button type="submit" onClick={() => changeWord(word)}>
        Click here to change the word
      </Button>
    </div>
  );
};

export default Child;
