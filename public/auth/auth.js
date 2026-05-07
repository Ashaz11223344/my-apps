// 🔐 EASY TO CHANGE PASSCODE
const PASSCODE = "2008";

// 🎯 RICKROLL LINK
const FAIL_REDIRECT = "https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo";

const form = document.getElementById("authForm");
const input = document.getElementById("passcode");
const button = document.getElementById("verifyBtn");
const message = document.getElementById("message");
const container = document.getElementById("authContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  verify();
});

function verify() {
  // Reset previous error styles and ensure message is visible
  message.style.opacity = "1";
  input.classList.remove("shake", "error-flash", "correct");
  message.classList.remove("success", "error");

  const enteredValue = input.value.trim();

  if (enteredValue === PASSCODE) {
    // Success
    input.classList.add("correct");

    message.textContent = "Welcome — You are Trusted by Ashaz ✨";
    message.classList.add("success");

    // Disable input
    input.disabled = true;
    button.disabled = true;

    // Instant redirect to guarantee webview / in-app browser compliance (zero setTimeout)
    window.location.href = "https://tomylovesmiti.qzz.io";
  } else {
    // Error
    input.classList.add("shake");
    input.classList.add("error-flash");

    message.textContent = "Access denied — wrong passcode";
    message.classList.add("error");

    setTimeout(() => {
      input.classList.remove("shake");
    }, 450);

    setTimeout(() => {
      input.classList.remove("error-flash");
      message.classList.remove("error");
      message.style.opacity = "0";
    }, 600);

    // Instant redirect to avoid webview block
    window.location.href = FAIL_REDIRECT;
  }
}
