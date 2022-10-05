import React from "react";
import Button from "./Button";
import "./Child.css";
import Input from "./Input";

const Child = ({ changeWord }) => {
  return (
    <div className="child">
      <h1>Child</h1>
      <Input />
      <Button onClick={() => changeWord("Lusen")}>
        Click here to change the word
      </Button>
    </div>
  );
};

export default Child;
