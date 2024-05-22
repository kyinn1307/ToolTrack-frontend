import React, { useEffect } from "react";
import "../src/styles/login.css";

const LoginPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/js/login.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="e1_4">
        <span className="e1_7" id="main-button">
          ITM <b>ToolTrack</b>
        </span>
        <button type="button" className="e1_8" id="login-button">
          login
        </button>
      </div>

      <div className="e1_11">
        <span className="e1_14">
          Welcome to ITM <b>ToolTrack</b> !
        </span>
        <span className="e1_16">ID </span>
        <span className="e1_17">PW </span>
        <div className="e1_27">
          <button type="button" className="e1_30" id="sign-up-button">
            sign-up
          </button>
        </div>
        <div className="e1_29">
          <input
            type="submit"
            className="e1_31"
            id="login-form-submit"
            value="log-in"
          />
        </div>
        <div className="e1_20">
          <div className="e1_18"></div>
          <span className="e1_19">only for ITM students</span>
        </div>
        <form className="e1_12" id="login-form">
          <input
            type="text"
            className="e1_21"
            name="ID"
            placeholder="Student Number"
            maxLength="8"
          />
          <input
            type="password"
            className="e1_26"
            name="Password"
            placeholder="PW"
            maxLength="20"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
