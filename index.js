function clicked() {
var user = document.getElementById("username");
var pass = document.getElementById("password");

var firstuser = "17cfarrell.dfe";
var firstpass = "Rmks2486";

var seconduser = "Rwilliams";
var secondpass = "difea6";

if(user.value == firstuser) {
if(pass.value == firstpass) {
window.alert("You are logged in as " +user.value);
}
else {
	window.alert("Incorrect Username or Password");
	return false;
	}
}

else if(user.value == seconduser) {
if(pass.value == secondpass) {
window.alert("You are logged in as " +user.value);
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
