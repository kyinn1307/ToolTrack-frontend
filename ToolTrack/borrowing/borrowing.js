document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");
  const borrowButton = document.getElementById("borrow-button");
  const bakButtonBorrowPage = document.getElementById(
    "back-button-borrow-page"
  );

  // in the case of click login button in header area
  loginButton.addEventListener("click", () => {
    window.location.href = "../login/login.html";
  });
  // in the case of click main button 'ITM ToolTrack' in header area
  mainButton.addEventListener("click", () => {
    window.location.href = "../roomSelection/roomSelection.html";
  });
  // in the case of click back button in borrow page
  bakButtonBorrowPage.addEventListener("click", () => {
    window.location.href = "../office/office.html";
  });
});
