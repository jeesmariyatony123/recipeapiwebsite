
const login = () => {
    if (usernameInput.value == "" || pswdInput.value == "") {
        alert("Please fill the form completely!!!")
    }
    else {
        user = usernameInput.value
        localStorage.setItem("user",user)
        // console.log(user);

        window.location = "receipe.html"
        alert("Login successfully")
    }
}