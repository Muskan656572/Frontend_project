const resetForm = document.getElementById("resetForm");

resetForm.addEventListener("submit", function(event) {

    event.preventDefault(); // to prevent page reload on form submission
    const email = document.getElementById("email").value.trim();

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const errorMessage =
        document.getElementById("error-message");


    // Clear old error
    errorMessage.textContent = "";

    // Email entry empty
    if (email === "") {
        errorMessage.textContent =
            "Please enter your email address.";
        return;
    }

    // New password empty
    if (newPassword === "") {

        errorMessage.textContent =
            "Please enter your new password.";

        return;
    }


    // Confirm password empty
    if (confirmPassword === "") {

        errorMessage.textContent =
            "Please confirm your password.";

        return;
    }



    // Password do not match
    if (newPassword !== confirmPassword) {

        errorMessage.textContent =
            "Passwords do not match.";

        return;
    }


    // Get saved user
    const savedUser =
        localStorage.getItem("careplusUser");


    // User doesn't exist
    if (savedUser === null) {

        errorMessage.textContent =
            "No account found.";

        return;
    }


    // Convert JSON string into object
    const user = JSON.parse(savedUser);

    // Email doesn't match
    if (user.email !== email) { 
        errorMessage.textContent =
            "Email does not match.";
        return;
    }
    
    // Update password
    user.password = newPassword;


    // Save updated user
    localStorage.setItem(
        "careplusUser",
        JSON.stringify(user)
    );


    // Success
    alert("Password reset successfully!");


    // Go to login
    window.location.href = "./login.html";

});