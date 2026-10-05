const signInLink = document.getElementById("signInLink");
const userMenu = document.getElementById("userMenu");

const userLetter = document.getElementById("userLetter");
const userDropdown = document.getElementById("userDropdown");

const dashboardLink = document.getElementById("dashboardLink");
const logoutBtn = document.getElementById("logoutBtn");


const loggedIn = localStorage.getItem("careplusLoggedIn");
const savedUser = localStorage.getItem("careplusUser");
const deleteAccountBtn = document.getElementById("deleteAccountBtn");

if (loggedIn === "true" && savedUser !== null) {

    const user = JSON.parse(savedUser);

    // Sign In hide
    signInLink.style.display = "none";

    // User menu show
    userMenu.style.display = "block";

    // User name ka first letter
    userLetter.textContent =
        user.name.charAt(0).toUpperCase();


    // Patient / Doctor dashboard
    if (user.role === "patient") {

        dashboardLink.href = "./patient-dashboard.html";

    } else if (user.role === "doctor") {

        dashboardLink.href = "./doctor-dashboard.html";

    }

} else {

    // User logged out
    signInLink.style.display = "block";
    userMenu.style.display = "none";
}

deleteAccountBtn.addEventListener("click", function() {

    const confirmDelete = confirm(
        "Are you sure you want to permanently delete your account?"
    );
    
    if (confirmDelete) {

        // Delete user account
        localStorage.removeItem("careplusUser");

        // Remove login status
        localStorage.removeItem("careplusLoggedIn");

        alert("Your account has been permanently deleted.");

        // Go to home
        window.location.href = "./home.html";
    }

});

/* Letter par click */

userLetter.addEventListener("click", function(event) {

    event.stopPropagation();

    userDropdown.classList.toggle("show");

});


/* Logout */

logoutBtn.addEventListener("click", function() {

    localStorage.removeItem("careplusLoggedIn");

    window.location.href = "./home.html";

});


/* Bahar click karne par dropdown close */

document.addEventListener("click", function() {

    userDropdown.classList.remove("show");

});