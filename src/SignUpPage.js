import React, { useState } from "react";
import "../src/styles/SignUp.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    const data = {
      studentId,
      name,
      password,
    };

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Sign up successful:", result);
        // Handle successful signup (e.g., redirect to login page)
        window.location.href = "http://localhost:3000";
      } else {
        console.error("Sign up failed:", response.statusText);
        // Handle signup failure
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };
  const handleLoginButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Header isLoggedIn={false} isAdmin={false} />{" "}
      <div className="e28_6">
        <form id="signup-form" onSubmit={handleSignUp}>
          <div className="e28_25">
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="e28_8"
              placeholder="Student number"
              maxLength="8"
              required
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="e28_27">
            <input
              type="text"
              id="name"
              name="name"
              className="e28_21"
              placeholder="Name"
              maxLength="20"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
