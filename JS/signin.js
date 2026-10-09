
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

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
        errorMessage.textContent = "Please enter a valid Gmail address.";
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

    // Get all registered accounts
    const users = JSON.parse(
        localStorage.getItem("careplusUsers")
    ) || [];

    // Prevent duplicate email registration
    const existingUser = users.find(function(item) {
        return item.email.toLowerCase() === email;
    });

    if (existingUser) {
        errorMessage.textContent = "This email is already registered. Please login.";
        return;
    }

    // Create account
    const user = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        role: role
    };

    // Save without replacing other accounts
    users.push(user);

    localStorage.setItem(
        "careplusUsers",
        JSON.stringify(users)
    );

    alert("Account created successfully!");

    window.location.href = "./login.html";
});
