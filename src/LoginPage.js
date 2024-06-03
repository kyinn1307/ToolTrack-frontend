import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/login.css";
import Header from "./Header"; // 헤더 컴포넌트 불러오기

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/js/login.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();

    const idInput = document.querySelector("input[name='ID']");
    const pwInput = document.querySelector("input[name='Password']");
    const idValue = idInput.value.trim();
    const pwValue = pwInput.value.trim();

    if (!idValue && !pwValue) {
      alert("Please enter both Student Number and Password.");
    } else if (!idValue) {
      alert("Please enter your Student Number (8 digits).");
    } else if (idValue.length !== 8) {
      alert("Student Number must be 8 digits.");
    } else if (!pwValue) {
      alert("Please enter your Password.");
    } else {
      const data = { studentId: idValue, password: pwValue };
      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const result = await response.json();
          console.log("Login successful:", result);
          navigate("/roomselection", { state: { student: result } });
        } else {
          console.error("Login failed:", response.statusText);
          alert("Login failed. Please check your credentials and try again.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again later.");
      }
    }
  };

  const handleLoginButtonClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <Header isLoggedIn={false} onLoginClick={handleLoginButtonClick} />{" "}
      <div className="e1_11">
        <span className="e1_14">
          Welcome to ITM <b>ToolTrack</b>!
        </span>
        <span className="e1_16">ID </span>
        <span className="e1_17">PW </span>
        <div className="e1_27">
          <button
            type="button"
            className="e1_30"
            id="sign-up-button"
            onClick={handleSignUpClick}
          >
            sign-up
          </button>
        </div>
        <div className="e1_29">
          <input
            type="submit"
            className="e1_31"
            id="login-form-submit"
            value="log-in"
            onClick={handleLoginClick}
          />
        </div>
        <div className="e1_20">
          <div className="e1_18"></div>
          <span className="e1_19">only for ITM students</span>
        </div>
        <form className="e1_12" id="login-form" method="POST">
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="{{ csrf_token }}"
          />
          <input
            type="text"
            className="e1_21"
            name="ID"
            placeholder="Student Number"
            maxLength="8"
            required
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <input
            type="password"
            className="e1_26"
            name="Password"
            placeholder="PW"
            maxLength="20"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
