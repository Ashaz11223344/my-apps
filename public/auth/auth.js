// 🔐 EASY TO CHANGE PASSCODE
const PASSCODE = "2008";

// 🎯 RICKROLL LINK
const FAIL_REDIRECT = "https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo";

const input = document.getElementById("passcode");
const button = document.getElementById("verifyBtn");
const message = document.getElementById("message");
const container = document.getElementById("authContainer");
const inputWrapper = document.getElementById("inputWrapper");

button.addEventListener("click", verify);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") verify();
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

    setTimeout(() => {
      container.classList.add("exit");
    }, 350);

    setTimeout(() => {
      window.location.replace("https://tomylovesmiti.qzz.io");
    }, 850);
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

    setTimeout(() => {
      window.location.href = FAIL_REDIRECT;
    }, 800);
  }
}

