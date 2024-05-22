document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");
  const backButton = document.getElementById("back-button-office");
  const calculatorBox = document.getElementById("calculator-box");

  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });
  // in the case of click main button 'ITM ToolTrack' in header area
  mainButton.addEventListener("click", () => {
    window.location.href = "roomSelection.html";
  });
  // the case of click back button in office page
  backButton.addEventListener("click", () => {
    window.location.href = "roomSelection.html";
  });
  calculatorBox.addEventListener("click", () => {
    window.location.href = "borrowing.html";
  });
});
