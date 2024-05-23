document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.querySelector(".e28_23");
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");

  // convert to login page with login button in header
  loginButton.addEventListener("click", () => {
    window.location.href = "../login/login.html";
  });
  // convert to login page with main button in header
  mainButton.addEventListener("click", () => {
    window.location.href = "../login/login.html";
  });

  signUpButton.addEventListener("click", () => {
    const studentIdInput = document.getElementById("studentId"); // 수정: ID로 변경
    const nameInput = document.getElementById("name"); // 새로운 입력 필드 추가
    const passwordInput = document.getElementById("password");

    const studentId = studentIdInput.value;
    const name = nameInput.value;
    const password = passwordInput.value;

    // check whether each field is empty
    if (studentId === "" || name === "" || password === "") {
      // alert that users need to add all fields
      alert("Please fill in all fields.");
      return;
    }

    // check whether the length of studentID
    if (studentId.length !== 8) {
      alert("Student number must be 8 digits.");
      return;
    }

    // 사용자 정보를 JSON 형식으로 생성
    const userData = {
      studentId: studentId, // 수정: 변수 이름 변경
      name: name, // 새로운 필드 추가
      password: password,
    };

    // 사용자 정보를 서버로 전송
    fetch("/signup/", {
      // 수정: 회원가입 URL로 변경
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
