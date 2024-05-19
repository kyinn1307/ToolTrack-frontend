document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("login-form");
  const loginSubmitButton = document.getElementById("login-form-submit");
  const signUpButton = document.getElementById("sign-up-button");
  const loginButton = document.getElementById("login-button");

  loginSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const userID = loginForm.elements["ID"].value;
    const userPassword = loginForm.elements["Password"].value;

    const predefinedID = "20102108";
    const predefinedPassword = "1234";

    if (userID === predefinedID && userPassword === predefinedPassword) {
      alert("Welcome");
      window.location.href = "roomSelection.html";
    } else {
      alert("fail");
      loginForm.reset();
    }
  });

  signUpButton.addEventListener("click", () => {
    window.location.href = "signUp.html";
  });

  loginButton.addEventListener("click", () => {
    loginForm.reset();
  });
});
