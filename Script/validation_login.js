// Signup Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let errors = [];

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // 1. Name validation
  if (name.length < 3 || /[^a-zA-Z\s]/.test(name)) {
    errors.push("Name must be at least 3 letters with no numbers or symbols.");
  }

  // 2. Email validation
  if (!email.endsWith("@shoghlana.com")) {
    errors.push("Email must end with @shoghlana.com");
  }

  // 3. Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    errors.push("Password must be at least 8 characters and contain upper, lower, number, and special char.");
  }

  // 4. Confirm password match
  if (password !== confirmPassword) {
    errors.push("Confirm password does not match.");
  }

  // Show errors
  const errorBox = document.getElementById("signupErrors");
  errorBox.innerHTML = errors.length ? errors.join("<br>") : "Signup successful!";
});

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let errors = [];

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Email validation
  if (!email.endsWith("@shoghlana.com")) {
    errors.push("Email must end with @shoghlana.com");
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    errors.push("Password is not valid.");
  }

  // Show errors
  const errorBox = document.getElementById("loginErrors");
  errorBox.innerHTML = errors.length ? errors.join("<br>") : "Login successful!";
});
