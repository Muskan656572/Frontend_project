
/* Check login and doctor role */

const docsavedUser = localStorage.getItem("careplusUser");
const doctorLoggedIn = localStorage.getItem("careplusLoggedIn");

if (docsavedUser === null || doctorLoggedIn !== "true") {
    window.location.href = "./login.html";
} else {

    const user = JSON.parse(docsavedUser);

    if (user.role !== "doctor") {
        window.location.href = "./home.html";
    } else {

        document.getElementById("doctorName").textContent = user.name;
        document.getElementById("welcomeDoctorName").textContent = user.name;

        loadDoctorAppointments(user);
    }
}


/* Load appointments for this doctor */

function loadDoctorAppointments(user) {

    const allAppointments = JSON.parse(
        localStorage.getItem("careplusAppointments")
    ) || [];

    // Match the logged-in doctor's name with the booked doctor's name
    function normalizeName(name) {
    return (name || "")
        .toLowerCase()
        .replace(/^dr\.?\s*/, "")
        .trim();
    }

    const doctorAppointments = allAppointments.filter(function (appointment) {
        return normalizeName(appointment.doctor) === normalizeName(user.name);
    });

    console.log("Doctor name:", user.name);
    console.log("All appointments:", allAppointments);
    console.log("Matched appointments:", doctorAppointments);

    // Today's appointments
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const today = `${year}-${month}-${day}`;
    console.log("Today's date:", today);
    
    const todayAppointments = doctorAppointments.filter(function (appointment) {
        return appointment.date === today;
    });
console.log("Today's appointments:", todayAppointments);

    // Update today's appointment count
    const statNumbers = document.querySelectorAll(".stat-card h2");

    if (statNumbers[0]) {
        statNumbers[0].textContent = todayAppointments.length;
    }

    // Update total unique patients
    const uniquePatients = new Set(
        doctorAppointments.map(function (appointment) {
            return appointment.patientEmail;
        })
    );

    if (statNumbers[1]) {
        statNumbers[1].textContent = uniquePatients.size;
    }

    if (statNumbers[2]) {
        statNumbers[2].textContent = todayAppointments.length;
    }
    // Display appointments in the existing table
    const table = document.querySelector(".appointment-table");

    if (!table) return;

    table.innerHTML = `
        <div class="table-header">
            <span>Patient</span>
            <span>Time</span>
            <span>Type</span>
            <span>Status</span>
        </div>
    `;

    if (doctorAppointments.length === 0) {
        table.insertAdjacentHTML(
            "beforeend",
            "<p>No appointments found for your account.</p>"
        );
        return;
    }

    doctorAppointments.forEach(function (appointment) {

        const row = document.createElement("div");
        row.className = "appointment-row";

        const status = (appointment.status || "Pending")
            .toLowerCase();

        const statusClass =
            status === "confirmed" ? "confirmed" :
            status === "rejected" ? "rejected" : "pending";

        const patient = document.createElement("div");
        patient.className = "patient";

        const avatar = document.createElement("div");
        avatar.className = "patient-avatar";
        avatar.textContent =
            (appointment.patientName || "P").charAt(0).toUpperCase();

        const details = document.createElement("div");

        const patientName = document.createElement("h4");
        patientName.textContent = appointment.patientName;

        const reason = document.createElement("p");
        reason.textContent = appointment.reason;

        details.append(patientName, reason);
        patient.append(avatar, details);

        const time = document.createElement("p");
        time.textContent = appointment.time;

        const type = document.createElement("p");
        type.textContent = appointment.speciality || "Consultation";

        const statusArea = document.createElement("div");

        const statusLabel = document.createElement("span");
        statusLabel.className = `status ${statusClass}`;
        statusLabel.textContent =
            status.charAt(0).toUpperCase() + status.slice(1);

        statusArea.appendChild(statusLabel);

        if (status === "pending") {

            const confirmBtn = document.createElement("button");
            confirmBtn.textContent = "Confirm";
            confirmBtn.className = "confirm-btn";

            confirmBtn.addEventListener("click", function () {
                updateAppointmentStatus(appointment.id, "Confirmed");
            });

            const rejectBtn = document.createElement("button");
            rejectBtn.textContent = "Reject";
            rejectBtn.className = "reject-btn";

            rejectBtn.addEventListener("click", function () {
                updateAppointmentStatus(appointment.id, "Rejected");
            });

            statusArea.append(confirmBtn, rejectBtn);
        }

        row.append(patient, time, type, statusArea);
        table.appendChild(row);
    });
}


/* Confirm or reject an appointment */

function updateAppointmentStatus(appointmentId, newStatus) {

    const allAppointments = JSON.parse(
        localStorage.getItem("careplusAppointments")
    ) || [];

    const appointment = allAppointments.find(function (item) {
        return item.id === appointmentId;
    });

    if (!appointment) return;

    appointment.status = newStatus;

    localStorage.setItem(
        "careplusAppointments",
        JSON.stringify(allAppointments)
    );

    const savedUser = JSON.parse(
        localStorage.getItem("careplusUser")
    );

    loadDoctorAppointments(savedUser);
}
