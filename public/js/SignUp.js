// SignUp.js

document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.querySelector(".e28_23");
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");

  // Convert to login page with login button in header
  loginButton.addEventListener("click", () => {
    window.location.href = "../login/login.html";
  });

  // Convert to login page with main button in header
  mainButton.addEventListener("click", () => {
    window.location.href = "../login/login.html";
  });

  signUpButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const studentIdInput = document.getElementById("studentId");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const studentId = studentIdInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check whether each field is empty
    if (studentId === "" || username === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Check whether the length of studentID
    if (studentId.length !== 8) {
      alert("Student number must be 8 digits.");
      return;
    }

    // Create user data in JSON format
    const userData = {
      studentId: studentId,
      username: username,
      password: password,
    };

    // Send user data to the server
    fetch("/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Sign up complete!");
          window.location.href = "../login/login.html";
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

// Function to get the CSRF token from the cookie
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
