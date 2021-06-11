function changepass() {
var idnum = document.getElementById("idnumb").value;
var pass = document.getElementById("changepassword").value;

var id ="1234";

if(idnum == id) {
window.alert("Welcome, Rob");
localStorage.setItem("newpass",pass);
return true;
}
else {
window.alert("You are not authorised to change this password")
return false;
}
}