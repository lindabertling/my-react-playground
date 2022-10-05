import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="header-title" onClick={() => navigate("/")}>
        Lusy's Playground!
      </h1>
    </div>
  );
};

export default Header;
