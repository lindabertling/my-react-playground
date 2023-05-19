import React, { useState } from "react";
import "./Parent.css";
import Child from "./Child";

const Parent = () => {
  const [word, setWord] = useState("Word");

  const onChangeWord = (userInputWord) => {
    setWord(userInputWord);
  };

  return (
    <div className="parent">
      <h1>Parent</h1>
      <h2 className="word">{word}</h2>
      <Child changeWord={onChangeWord} />
    </div>
  );
};

export default Parent;
