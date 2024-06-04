import React from "react";
import "../src/styles/header.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ isLoggedIn, isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {};
  const handleMainButtonClick = () => {
    navigate("/");
  };
  const handleAddButtonClick = () => {
    navigate("/additem", { state: { student } });
  };
  const handleRemoveButtonClick = () => {
    navigate("/removeitem", { state: { student } });
  };
  const handleUpdateButtonClick = () => {
    navigate("/updateitem", { state: { student } });
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
          onClick={handleMainButtonClick}
        >
          {isLoggedIn ? "logout" : "login"}
        </button>
      )}
      {isAdmin && (
        <div>
          <button
            type="button"
            className="e1_8"
            id="add-button"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
          <button
            type="button"
            className="e1_8"
            id="remove-button"
            onClick={handleRemoveButtonClick}
          >
            Remove
          </button>
          <button
            type="button"
            className="e1_8"
            id="update-button"
            onClick={handleUpdateButtonClick}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
