import React, { useState } from "react";
import "../src/styles/SignUp.css";

const SignUpPage = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
      } else {
        console.error("Sign up failed:", response.statusText);
        // Handle signup failure
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

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
