// 🔐 EASY TO CHANGE PASSCODE
const PASSCODE = "2008";

// 🎯 RICKROLL LINK
const FAIL_REDIRECT = "https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo";

const input = document.getElementById("passcode");
const button = document.getElementById("verifyBtn");
const message = document.getElementById("message");

button.addEventListener("click", verify);
input.addEventListener("keyup", e => {
  if (e.key === "Enter") verify();
});
function verify() {
  if (input.value === PASSCODE) {
    input.classList.add("correct");

    message.textContent = "Welcome , You are Trusted by Ashaz";
    message.classList.add("success");

    const container = document.querySelector(".auth-container");

    setTimeout(() => {
      container.classList.add("exit");
    }, 900);

    setTimeout(() => {
      window.location.href = "https://tomylovesmiti.qzz.io";
    }, 1300);
  } else {
    input.classList.add("shake");

    setTimeout(() => {
      input.classList.remove("shake");
    }, 400);

    setTimeout(() => {
      window.location.href = FAIL_REDIRECT;
    }, 800);
  }
}

