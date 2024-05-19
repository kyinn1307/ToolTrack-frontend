document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const loginSubmitButton = document.getElementById("login-form-submit");
  const signUpButton = document.getElementById("sign-up-button");
  const loginButton = document.getElementById("login-button");

  // make an instance using user information
  const users = {
    20102108: {
      password: "1234",
      name: "John",
    },
  };

  loginSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    loginUser();
  });
  // in the case of click sign-up button
  signUpButton.addEventListener("click", () => {
    window.location.href = "signUp.html";
  });
  // in the case of click login button in header area
  loginButton.addEventListener("click", () => {
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

    if (userID in users && users[userID].password === userPassword) {
      const userName = users[userID].name;
      alert(`Welcome, ${userName}!`); // show alert message using userName
      window.location.href = "roomSelection.html";
    } else {
      alert("ID or password incorrect."); // show alert message in fail to login in
      loginForm.reset();
      window.location.href = "login.html";
    }
  }
});

// remove placeholder when user click the input area
document.addEventListener("DOMContentLoaded", function () {
  var idInput = document.querySelector('input[name="ID"]');
  var pwInput = document.querySelector('input[name="Password"]');

  idInput.addEventListener("focus", function () {
    this.removeAttribute("placeholder");
  });

  idInput.addEventListener("blur", function () {
    if (this.value === "") {
      this.setAttribute("placeholder", "ID");
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
