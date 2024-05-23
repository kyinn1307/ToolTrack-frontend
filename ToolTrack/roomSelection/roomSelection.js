document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const mainButton = document.getElementById("main-button");
  const officeButton = document.getElementById("office-button");
  const studentRoomButton = document.getElementById("student-room-button");

  loginButton.addEventListener("click", () => {
    window.location.href = "../login/login.html";
  });
  // in the case of click main button 'ITM ToolTrack' in header area
  mainButton.addEventListener("click", () => {
    window.location.href = "../roomSelection/roomSelection.html";
  });

  // Add event listeners for hover effect
  officeButton.addEventListener("mouseenter", () => {
    officeButton.classList.add("hovered");
  });

  officeButton.addEventListener("mouseleave", () => {
    officeButton.classList.remove("hovered");
  });

  studentRoomButton.addEventListener("mouseenter", () => {
    studentRoomButton.classList.add("hovered");
  });

  studentRoomButton.addEventListener("mouseleave", () => {
    studentRoomButton.classList.remove("hovered");
  });

  // Add event listeners for click actions
  officeButton.addEventListener("click", () => {
    window.location.href = "../office/office.html";
  });

  studentRoomButton.addEventListener("click", () => {
    window.location.href = "../studentRoom/studentRoom.html";
  });
});
