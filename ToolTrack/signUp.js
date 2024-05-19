document.addEventListener("DOMContentLoaded", (event) => {
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.querySelector(".e28_23");

  signUpButton.addEventListener("click", () => {
    const studentNumberInput = document.querySelector(".e28_8");
    const passwordInput = document.querySelector(".e28_9");
    const usernameInput = document.querySelector(".e28_21");

    const studentNumber = studentNumberInput.value;
    const password = passwordInput.value;
    const username = usernameInput.value;

    // 각 입력 필드가 비어있는지 확인
    if (studentNumber === "" || password === "" || username === "") {
      alert("Please fill in all fields.");
      window.location.href = "signUp.html";
      return;
    }

    // 학번이 8자리인지 확인
    if (studentNumber.length !== 8) {
      alert("Student number must be 8 digits.");
      window.location.href = "signUp.html";
      return;
    }

    const userExists = checkIfUserExists(studentNumber);

    if (userExists) {
      alert("User already exists.");
      window.location.href = "signUp.html";
    } else {
      alert("Sign up complete!");
      window.location.href = "login.html";
    }
  });
});

function checkIfUserExists(studentNumber) {
  return false;
}
