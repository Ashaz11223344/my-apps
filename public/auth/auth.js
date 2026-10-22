// 🎯 RICKROLL LINK FALLBACK
const FAIL_REDIRECT = "https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo";

const form = document.getElementById("authForm");
const input = document.getElementById("passcode");
const button = document.getElementById("verifyBtn");
const message = document.getElementById("message");
const container = document.getElementById("authContainer");
const statusEl = document.getElementById("inputStatus");

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

let isVerifying = false;

async function verify() {
  if (!input || isVerifying) return;

  const enteredValue = input.value.trim();
  if (!enteredValue) return;

  isVerifying = true;
  if (button) button.disabled = true;

  // Reset previous error styles and ensure message is visible
  if (message) {
    message.style.opacity = "1";
    message.classList.remove("success", "error");
    message.textContent = "Verifying authorization...";
  }
  if (statusEl) {
    statusEl.textContent = "[VERIFYING...]";
    statusEl.style.color = "#1E1E1E";
  }
  input.classList.remove("shake", "error-flash", "correct");

  try {
    const response = await fetch("/api/verify-passcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ passcode: enteredValue }),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.success) {
      // Success
      input.classList.add("correct");

      if (statusEl) {
        statusEl.textContent = "[ACCESS GRANTED]";
        statusEl.style.color = "#1E1E1E";
      }

      if (message) {
        message.textContent = data.message || "Welcome — You are Trusted by Ashaz ✨";
        message.classList.add("success");
      }

      // Disable input and button
      input.disabled = true;
      if (button) button.disabled = true;

      // Instant redirect to guarantee compatibility on all desktop and mobile browsers
      const targetUrl = data.redirectUrl || "https://tomylovesmiti.qzz.io";
      try {
        window.location.replace(targetUrl);
      } catch (err) {
        window.location.href = targetUrl;
      }
    } else {
      handleFailure(data.redirectUrl || FAIL_REDIRECT, data.message || "Access denied — wrong passcode");
    }
  } catch (err) {
    handleFailure(FAIL_REDIRECT, "Access denied — wrong passcode");
  } finally {
    isVerifying = false;
  }
}

function handleFailure(redirectUrl, errorMsg) {
  input.classList.add("shake");
  input.classList.add("error-flash");

  if (statusEl) {
    statusEl.textContent = "[ACCESS DENIED]";
    statusEl.style.color = "#DB4A2B";
  }

  if (message) {
    message.textContent = errorMsg;
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
    if (statusEl) {
      statusEl.textContent = "[ENCRYPTED GATEWAY]";
      statusEl.style.color = "#DB4A2B";
    }
    if (button) button.disabled = false;
  }, 600);

  // Short delayed fallback for failure, ensuring synchronous fallback if needed
  try {
    window.location.replace(redirectUrl);
  } catch (err) {
    window.location.href = redirectUrl;
  }
}
