import React from "react";
import "../src/styles/header.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMainButtonClick = () => {
    if (location.pathname === "/" || location.pathname === "/signup") {
      navigate("/"); // Navigate to login page
    } else {
      navigate("/roomselection"); // Navigate to roomselection page
    }
  };

  const isLoginPage = location.pathname === "/";

  return (
    <div className="e1_4">
      <span className="e1_7" id="main-button" onClick={handleMainButtonClick}>
        ITM <b>ToolTrack</b>
      </span>
      {!isLoginPage && (
        <button
          type="button"
          className="e1_8"
          id="login-button"
          onClick={isLoggedIn ? onLogoutClick : onLoginClick}
        >
          {isLoggedIn ? "logout" : "login"}
        </button>
      )}
    </div>
  );
};

export default Header;
