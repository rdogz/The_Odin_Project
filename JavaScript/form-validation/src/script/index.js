import "../css/style.css";
import "../css/reset.css";

const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const submitButton = document.querySelection("button");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
