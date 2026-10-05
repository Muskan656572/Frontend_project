const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();  // to prevent page reload on form submission

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    const errorMessage = document.getElementById("error-message");

    // Clear old error
    errorMessage.textContent = "";

    // Validation
    if (name === "") {
        errorMessage.textContent = "Please enter your full name.";
        return;
    }

    if (email === "") {
        errorMessage.textContent = "Please enter your email address.";
        return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (password === "") {
        errorMessage.textContent = "Please create a password.";
        return;
    }

    if (confirmPassword === "") {
        errorMessage.textContent = "Please confirm your password.";
        return;
    }

    if (role === "") {
        errorMessage.textContent = "Please select your role.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // Create user
    const user = {
        name: name,
        email: email,
        password: password,
        role: role
    };

    // Save user
    localStorage.setItem("careplusUser", JSON.stringify(user));

    // Success
    alert("Account created successfully!");

    // Go to login
    window.location.href = "login.html";
});