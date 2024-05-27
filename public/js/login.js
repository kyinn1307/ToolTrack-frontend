document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const loginSubmitButton = document.getElementById("login-form-submit");
  const signUpButton = document.getElementById("sign-up-button");
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");

  loginSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    loginUser();
  });

  // Navigate to sign-up page on sign-up button click
  signUpButton.addEventListener("click", () => {
    window.location.href = "SignUp.html";
  });

  // Navigate to login page on login button click in header
  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  // Navigate to login page on main button click in header
  mainButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  // Submit form on Enter key press
  loginForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      loginUser();
    }
  });

  function loginUser() {
    const userID = loginForm.elements["ID"].value;
    const userPassword = loginForm.elements["Password"].value;

    if (userID === "" || userPassword === "") {
      alert("Please enter ID and password.");
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/login/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          alert(`Welcome, ${response.name}!`);
          window.location.href = "roomSelection.html";
        } else {
          const response = JSON.parse(xhr.responseText);
          alert(response.error);
          loginForm.reset();
        }
      }
    };

    const requestData = `studentId=${encodeURIComponent(
      userID
    )}&password=${encodeURIComponent(userPassword)}`;
    xhr.send(requestData);
  }

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const idInput = document.querySelector('input[name="ID"]');
  const pwInput = document.querySelector('input[name="Password"]');

  idInput.addEventListener("focus", function () {
    this.removeAttribute("placeholder");
  });

  idInput.addEventListener("blur", function () {
    if (this.value === "") {
      this.setAttribute("placeholder", "Student Number");
    }
  });

  pwInput.addEventListener("focus", function () {
    this.removeAttribute("placeholder");
  });

  pwInput.addEventListener("blur", function () {
    if (this.value === "") {
      this.setAttribute("placeholder", "PW");
    }
  });
});
