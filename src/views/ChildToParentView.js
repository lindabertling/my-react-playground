import React from "react";
import "./ChildToParentView.css";
import Parent from "../components/childToParent/Parent";

const ChildToParentView = () => {
  return (
    <div className="content-container">
      <Parent />
    </div>
  );
};

export default ChildToParentView;
