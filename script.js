// 1. DARK / LIGHT MODE
var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
});

// 2. MOBILE MENU (open/close, and close after clicking a link)
var menuBtn = document.getElementById("menu-btn");
var navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
navLinks.addEventListener("click", function () {
  navLinks.classList.remove("open");
});

// 3. CONTACT FORM VALIDATION
var form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var valid = true;

  // clear old messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  document.getElementById("success").textContent = "";

  if (name === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    valid = false;
  }
  if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    valid = false;
  }
  if (message.length < 10) {
    document.getElementById("message-error").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").textContent = "Thanks " + name + ", your message has been sent!";
    form.reset();
  }
});
