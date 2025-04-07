var count = 2;

function validate() {
    var user = document.login.username.value;
    var password = document.login.password.value;
    var valid = false;

    var usernameArray = ["pallavi"];
    var passwordArray = ["123"];

    for (var i = 0; i < usernameArray.length; i++) {
        if (user === usernameArray[i] && password === passwordArray[i]) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert("Login was successful");
        window.location.href = "afterLogin.html";
    } else {
        if (count > 0) {
            alert("Wrong username or password");
            count--;
        } else {
            alert("No more tries left!");
        }
    }
}
