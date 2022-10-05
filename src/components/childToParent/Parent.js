import React, { useState } from "react";
import "./Parent.css";
import Child from "./Child";

const Parent = () => {
  const [word, setWord] = useState("Word");

  return (
    <div className="parent">
      <h1>Parent</h1>
      <h2>{word}</h2>
      <Child changeWord={(word) => setWord(word)} />
    </div>
  );
};

export default Parent;
