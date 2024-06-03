import React from "react";
import "../src/styles/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/"); // Use navigate to change the route
  };

  return (
    <div className="e1_4">
      <span className="e1_7" id="main-button" onClick={handleLoginClick}>
        ITM <b>ToolTrack</b>
      </span>
      <button
        type="button"
        className="e1_8"
        id="login-button"
        onClick={handleLoginClick}
      >
        login
      </button>
    </div>
  );
};

export default Header;
