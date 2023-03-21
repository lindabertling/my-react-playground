import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <h1 className="header-title">Lusy's Playground!</h1>
      <div className="nav">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/child-to-parent")}>Child to Parent</li>
          <li>I am a link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
