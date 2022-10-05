import React from "react";
import Button from "./Button";
import "./Child.css";

const Child = ({ changeWord }) => {
  return (
    <div className="child">
      <h1>Child</h1>
      <Button onClick={() => changeWord("Lusen")}>
        Click to change the word
      </Button>
      {/* <button onClick={() => changeWord("Lusen")}>
        Click to change the title
      </button> */}
    </div>
  );
};

export default Child;
