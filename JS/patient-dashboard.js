const savedUser = localStorage.getItem("careplusUser");

if (savedUser !== null) {

    const user = JSON.parse(savedUser);

    document.getElementById("sidebarUserName").textContent = user.name;

    document.getElementById("userName").textContent = user.name;

    document.getElementById("topUserName").textContent = user.name;

}