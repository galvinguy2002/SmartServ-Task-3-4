var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
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
if ( username == "123@gmail.com" && password == "SmartServTest@123"){
alert ("Login successfully");
window.location = "dashboard.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}