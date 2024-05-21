document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");
  const backButtonStudentRoom = document.getElementById(
    "back-button-studentRoom"
  );

  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });
  // in the case of click main button 'ITM ToolTrack' in header area
  mainButton.addEventListener("click", () => {
    window.location.href = "roomSelection.html";
  });
  // in the case of click main button 'ITM ToolTrack' in header area
  backButtonStudentRoom.addEventListener("click", () => {
    window.location.href = "roomSelection.html";
  });
});
