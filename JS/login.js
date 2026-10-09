
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (email === "") {
        errorMessage.textContent = "Please enter your email address.";
        return;
    }

    if (password === "") {
        errorMessage.textContent = "Please enter your password.";
        return;
    }

    // Get all registered accounts
    const users = JSON.parse(
        localStorage.getItem("careplusUsers")
    ) || [];

    // Find the account matching the entered email and password
    const user = users.find(function(item) {
        return item.email.toLowerCase() === email.toLowerCase()
            && item.password === password;
    });

    if (!user) {
        errorMessage.textContent = "Invalid email or password.";
        return;
    }

    // Save the currently logged-in account
    localStorage.setItem("careplusUser", JSON.stringify(user));
    localStorage.setItem("careplusLoggedIn", "true");

    alert("Login successful!");

    if (user.role === "patient") {
        window.location.href = "./patient-dashboard.html";
    } else if (user.role === "doctor") {
        window.location.href = "./doctor-dashboard.html";
    } else {
        window.location.href = "./home.html";
    }
});
