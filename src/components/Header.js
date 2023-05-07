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
          <li onClick={() => navigate("/video")}>Salsa video</li>
          <li onClick={() => navigate("/random-quote")}>Random Quotes</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
