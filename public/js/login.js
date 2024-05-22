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
  // in the case of click sign-up button
  signUpButton.addEventListener("click", () => {
    window.location.href = "../SignUp/SignUp.html";
  });
  // in the case of click login button in header area
  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });
  // in the case of click main button 'ITM ToolTrack' in header area
  mainButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  // when user enter the 'Enter' key
  loginForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      loginUser();
    }
  });

  // Implementing the function of login process
  function loginUser() {
    const userID = loginForm.elements["ID"].value;
    const userPassword = loginForm.elements["Password"].value;
    // alert when input area is empty
    if (userID === "" || userPassword === "") {
      alert("Please enter ID and password.");
      return;
    }

    // Create an AJAX request to send the login data to the Django backend
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/login/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken")); // Include the CSRF token

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

  // Function to get CSRF token from cookie
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

  // remove placeholder when user click the input area
  var idInput = document.querySelector('input[name="ID"]');
  var pwInput = document.querySelector('input[name="Password"]');

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
