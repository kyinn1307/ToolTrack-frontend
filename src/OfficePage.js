// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/office.css";

const OfficePage = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/roomselection"); // Use navigate to change the route
  };

  return (
    <div>
      <div className="e1_4">
        <span className="e1_7" id="main-button" onClick={handleBackButtonClick}>
          ITM <b>ToolTrack</b>
        </span>
        <button type="button" className="e1_8" id="login-button">
          login
        </button>
      </div>

      <div className="e19_14">
        <div className="e19_15"></div>
        <div className="e19_16" id="calculator-box">
          <div className="e19_33"></div>
        </div>
        <div className="e19_17">
          <div className="e19_32"></div>
        </div>
        <span className="e19_19">
          Which <b>tool</b> do you want?
        </span>
        <span className="e19_20">
          Now you can borrow from the <b>office</b>
        </span>
        <span className="e19_21">Remaining number</span>
        <span className="e19_22">calculator</span>
        <span className="e19_23">26</span>
        <div className="e19_24">
          <div className="e19_25">
            <div className="e19_26"></div>
          </div>
          <span className="e19_27">calculator</span>
        </div>
        <div className="e19_28">
          <div className="e19_29">
            <div className="e19_30"></div>
          </div>
          <span className="e19_31">blanket</span>
        </div>
        <div
          className="e32_87"
          id="back-button-office"
          onClick={handleBackButtonClick}
        >
          <div className="e32_85"></div>
        </div>
      </div>
    </div>
  );
};

export default OfficePage;
