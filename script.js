

function check() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var date = document.getElementById("date").value;
	
	localStorage.setItem("name",name);
	localStorage.setItem("email",email);
	localStorage.setItem("phone",phone);
	localStorage.setItem("date",date);
	
	if(name == "") {
		window.alert ("Please fill all fields");
		return false;
}
else if(email == "") {
	window.alert("Please fill all fields");
	return false;
}
else if(isNaN(phone) || phone < 1) {
	window.alert ("Number is invalid!");
	return false;
	}
	else if(date == "") {
		window.alert("Please fill date field");
		return false;
}
}