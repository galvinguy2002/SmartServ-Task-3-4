var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(username)) {
    alert("Please enter a valid email address as the username.");
    return false;
  }

  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert("Password must contain at least 8 characters, including at least one uppercase letter, one number, and only '@' as a special character.");
    return false;
  }

  // Here, you can add your logic for handling the login based on your backend validation.
  // For example, make an API call to validate the credentials.

  alert("Login successfully");
  window.location = "dashboard.html"; // Redirecting to other page.
  return false;
}
