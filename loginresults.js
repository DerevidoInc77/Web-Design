function login() {
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;

var firstuser = "Rwilliams";

if(user == firstuser) {
if(pass == localStorage.newpass) {
window.alert("You are logged in as " +user);
}
else {
	window.alert("Incorrect Username or Password");
	return false;
}
}
else {
	window.alert("Incorrect Username or Password");
	return false;
}
}