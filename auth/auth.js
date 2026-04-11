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
  if (input.value === PASSCODE) {
    // Success
    input.classList.add("correct");

    message.textContent = "Welcome — You are Trusted by Ashaz ✨";
    message.classList.add("success");

    // Disable input
    input.disabled = true;
    button.disabled = true;

    setTimeout(() => {
      container.classList.add("exit");
    }, 900);

    setTimeout(() => {
      window.location.href = "https://tomylovesmiti.qzz.io";
    }, 1400);
  } else {
    // Error
    input.classList.add("shake");
    input.classList.add("error-flash");

    message.textContent = "Access denied — wrong passcode";
    message.classList.remove("success");
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
