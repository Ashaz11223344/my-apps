// 🔐 EASY TO CHANGE PASSCODE
const PASSCODE = "2008";

// 🎯 RICKROLL LINK
const FAIL_REDIRECT = "https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo";

const form = document.getElementById("authForm");
const input = document.getElementById("passcode");
const button = document.getElementById("verifyBtn");
const message = document.getElementById("message");
const container = document.getElementById("authContainer");

// 1. SAFELY ADD SUBMIT LISTENER (NEW HTML FORM APPROACH)
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    verify();
  });
}

// 2. BACKWARD COMPATIBILITY: CLICK LISTENER (OLD HTML OR FORM FALLBACK)
if (button) {
  button.addEventListener("click", (e) => {
    if (!form) {
      e.preventDefault();
      verify();
    }
  });
}

// 3. BACKWARD COMPATIBILITY: ENTER KEY LISTENER
if (input) {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      if (!form) {
        e.preventDefault();
        verify();
      }
    }
  });
}

function verify() {
  if (!input) return;

  // Reset previous error styles and ensure message is visible
  if (message) {
    message.style.opacity = "1";
    message.classList.remove("success", "error");
  }
  input.classList.remove("shake", "error-flash", "correct");

  const enteredValue = input.value.trim();

  if (enteredValue === PASSCODE) {
    // Success
    input.classList.add("correct");

    if (message) {
      message.textContent = "Welcome — You are Trusted by Ashaz ✨";
      message.classList.add("success");
    }

    // Disable input and button
    input.disabled = true;
    if (button) button.disabled = true;

    // Instant redirect to guarantee compatibility on all desktop and mobile browsers
    try {
      window.location.replace("https://tomylovesmiti.qzz.io");
    } catch (err) {
      window.location.href = "https://tomylovesmiti.qzz.io";
    }
  } else {
    // Error
    input.classList.add("shake");
    input.classList.add("error-flash");

    if (message) {
      message.textContent = "Access denied — wrong passcode";
      message.classList.add("error");
    }

    setTimeout(() => {
      input.classList.remove("shake");
    }, 450);

    setTimeout(() => {
      input.classList.remove("error-flash");
      if (message) {
        message.classList.remove("error");
        message.style.opacity = "0";
      }
    }, 600);

    // Short delayed fallback for failure, ensuring synchronous fallback if needed
    try {
      window.location.replace(FAIL_REDIRECT);
    } catch (err) {
      window.location.href = FAIL_REDIRECT;
    }
  }
}
