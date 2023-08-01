function validate() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (username == "" || password == "") {
        alert("Please fill in all fields.");
        return false;
    }
    else if (username != "username" || password != "password") {
        alert("Invalid username or password.");
        return false;
    }
    else {
        alert("Login successful!");
        return true;
    }
}

document.getElementsByName("submit")[0].addEventListener("click", validate);
