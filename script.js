const password = document.querySelector("#password");
const eyeButton = document.querySelector("#eyeButton");
const form = document.querySelector("#signupForm");
const email = document.querySelector("#email");
const headline = document.querySelector("#headline");
const tagline = document.querySelector("#tagline");
const tip = document.querySelector("#tip");
const error = document.querySelector("#formError");
const submitButton = document.querySelector("#submitButton");

const moods = {
  watching: ["Watching", "Tuck follows your caret."],
  hiding: ["Hiding", "Password firmly tucked away."],
  peeking: ["Peeking", "Tap Show and see sneaky stuff."],
  oops: ["Oops", "Too short. Tuck shakes its head."],
  welcome: ["Welcome", "Account created. Eyes out."]
};

let moodTimer;
function setMood(name) {
  const [title, subtitle] = moods[name];
  headline.classList.add("blur");
  window.clearTimeout(moodTimer);
  moodTimer = window.setTimeout(() => {
    headline.textContent = title;
    tagline.textContent = subtitle;
    headline.classList.remove("blur");
  }, 110);
}

eyeButton.addEventListener("click", () => {
  const showing = password.type === "password";
  password.type = showing ? "text" : "password";
  eyeButton.setAttribute("aria-pressed", String(showing));
  eyeButton.setAttribute("aria-label", showing ? "Hide password" : "Show password");
  tip.innerHTML = showing ? "Password is <b>peeking</b> — tap Hide to tuck it away" : "Type a password — or tap <b>Show</b>";
  setMood(showing ? "peeking" : "hiding");
});

password.addEventListener("focus", () => {
  if (password.type === "password") setMood("watching");
});
password.addEventListener("input", () => {
  error.textContent = "";
  if (password.value.length > 0 && password.value.length < 8) setMood("watching");
  else if (password.value.length >= 8) setMood(password.type === "text" ? "peeking" : "hiding");
});

form.addEventListener("submit", event => {
  event.preventDefault();
  error.textContent = "";
  const emailValue = email.value.trim();
  const passwordValue = password.value;

  if (!emailValue || !email.validity.valid) {
    error.textContent = "Please enter a valid email address.";
    email.focus();
    return;
  }
  if (passwordValue.length < 8) {
    error.textContent = "Password must be at least 8 characters.";
    setMood("oops");
    password.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Creating account...";
  window.setTimeout(() => {
    setMood("welcome");
    tagline.textContent = "Account created. Eyes out.";
    submitButton.textContent = "Welcome aboard!";
    submitButton.disabled = false;
  }, 650);
});
