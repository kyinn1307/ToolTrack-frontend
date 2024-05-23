import React, { useEffect } from "react";
import "../src/styles/SignUp.css";
import signUpScript from "./SignUpScript"; // 수정된 JavaScript 파일을 불러옵니다.

const SignUpPage = () => {
  useEffect(() => {
    signUpScript(); // JavaScript 로직을 호출합니다.
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

      <div className="e28_6">
        <form id="signup-form" method="POST" action="/signup/">
          <div className="e28_25">
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="e28_8"
              placeholder="Student number"
              maxLength="8"
              required
            />
          </div>
          <div className="e28_27">
            <input
              type="text"
              id="username"
              name="username"
              className="e28_21"
              placeholder="Username"
              maxLength="20"
              required
            />
          </div>
          <div className="e28_24">
            <input
              type="password"
              id="password"
              name="password"
              className="e28_9"
              placeholder="PW"
              maxLength="20"
              required
            />
          </div>
          <button type="submit" className="e28_23">
            Sign Up
          </button>
        </form>
        <span className="e28_31">
          Sign up for ITM <b>ToolTrack</b>!
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
