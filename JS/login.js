function showPassword() {
    const passwordInput = document.getElementById("ipassword");
    const showPasswordCheckbox = document.getElementById("showPW");

    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
