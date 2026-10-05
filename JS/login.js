const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    // Email validation
    if (email === "") {
        errorMessage.textContent = "Please enter your email address.";
        return;
    }

    // Password validation
    if (password === "") {
        errorMessage.textContent = "Please enter your password.";
        return;
    }

    // Get saved user
    const savedUser = localStorage.getItem("careplusUser");

    if (savedUser === null) {
        errorMessage.textContent = "No account found. Please sign up first.";
        return;
    }

    // Convert JSON string into object
    const user = JSON.parse(savedUser);

    // Check email and password
    if (email !== user.email || password !== user.password) {
        errorMessage.textContent = "Invalid email or password.";
        return;
    }

    // Login successful
    localStorage.setItem("careplusLoggedIn", "true");

    alert("Login successful!");

    window.location.href = "home.html"; // Redirect to dashboard

});