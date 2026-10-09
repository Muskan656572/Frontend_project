const savedUser = localStorage.getItem("careplusUser");
const loggedIn = localStorage.getItem("careplusLoggedIn");

if (!savedUser || loggedIn !== "true") {
    window.location.href = "./login.html";
} else {
    const user = JSON.parse(savedUser);

    if (user.role !== "patient") {
        window.location.href = "./home.html";
    } else {
        document.getElementById("sidebarUserName").textContent = user.name;
        document.getElementById("userName").textContent = user.name;
        document.getElementById("topUserName").textContent = user.name;

        loadPatientDashboard(user);
    }
}

function loadPatientDashboard(user) {
    const allAppointments =
        JSON.parse(localStorage.getItem("careplusAppointments")) || [];

    // Sirf logged-in patient ki appointments
    const patientAppointments = allAppointments.filter(function (appointment) {
        return (appointment.patientEmail || "").toLowerCase() ===
            (user.email || "").toLowerCase();
    });

    // Date ko YYYY-MM-DD format mein compare karna
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    function parseAppointmentDate(dateString) {
        if (!dateString) return null;

        const parts = dateString.split("-");

        if (parts.length !== 3) return null;

        const date = new Date(
            Number(parts[0]),
            Number(parts[1]) - 1,
            Number(parts[2])
        );

        date.setHours(0, 0, 0, 0);
        return date;
    }

    // Upcoming: aaj ya future ki appointments, jo completed/rejected nahi hain
    const upcomingAppointments = patientAppointments.filter(function (appointment) {
        const appointmentDate = parseAppointmentDate(appointment.date);
        const status = (appointment.status || "Pending").toLowerCase();

        return appointmentDate &&
            appointmentDate >= today &&
            status !== "completed" &&
            status !== "rejected";
    });

    // Latest appointment pehle
    patientAppointments.sort(function (a, b) {
        return (b.id || 0) - (a.id || 0);
    });

    // Upcoming appointment date ke hisaab se sort
    upcomingAppointments.sort(function (a, b) {
        return (a.date || "").localeCompare(b.date || "") ||
            (a.time || "").localeCompare(b.time || "");
    });

    // Unique doctors jinse patient ki appointment hui hai
    const uniqueDoctors = new Set(
        patientAppointments.map(function (appointment) {
            return appointment.doctor;
        }).filter(Boolean)
    );

    // Medical records ka actual record data abhi available nahi hai.
    // Filhaal appointment history ko count kar rahe hain.
    document.getElementById("upcomingAppointmentsCount").textContent =
        upcomingAppointments.length;

    document.getElementById("doctorsVisitedCount").textContent =
        uniqueDoctors.size;

    document.getElementById("medicalRecordsCount").textContent =
        patientAppointments.length;

    renderUpcomingAppointment(upcomingAppointments);
    renderRecentAppointments(patientAppointments);
}

function renderUpcomingAppointment(appointments) {
    const container = document.getElementById("upcomingAppointmentDetails");
    container.replaceChildren();

    if (appointments.length === 0) {
        container.textContent = "No upcoming appointments yet.";
        return;
    }

    const appointment = appointments[0];

    const image = document.createElement("img");
    image.src = appointment.doctorImage || "../images/doctors10.jpg";
    image.alt = "Doctor";
    container.appendChild(image);

    const info = document.createElement("div");
    info.className = "appointment-info";

    const doctorName = document.createElement("h3");
    doctorName.textContent = appointment.doctor || "Doctor";
    info.appendChild(doctorName);

    const speciality = document.createElement("p");
    speciality.textContent = appointment.speciality || "Speciality not available";
    info.appendChild(speciality);

    const details = document.createElement("div");
    details.className = "appointment-details";

    const date = document.createElement("span");
    date.innerHTML = '<i class="fa-solid fa-calendar"></i> ';
    date.appendChild(document.createTextNode(appointment.date || "Date not set"));

    const time = document.createElement("span");
    time.innerHTML = '<i class="fa-solid fa-clock"></i> ';
    time.appendChild(document.createTextNode(appointment.time || "Time not set"));

    details.append(date, time);
    info.appendChild(details);
    container.appendChild(info);

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = appointment.status || "Pending";
    container.appendChild(status);
}

function renderRecentAppointments(appointments) {
    const container = document.getElementById("recentAppointmentsList");
    container.replaceChildren();

    if (appointments.length === 0) {
        container.textContent = "No appointments booked yet.";
        return;
    }

    appointments.slice(0, 5).forEach(function (appointment) {
        const row = document.createElement("div");
        row.className = "table-row";

        const doctor = document.createElement("span");
        doctor.textContent = appointment.doctor || "Doctor";

        const speciality = document.createElement("span");
        speciality.textContent = appointment.speciality || "—";

        const date = document.createElement("span");
        date.textContent = appointment.date || "—";

        const status = document.createElement("span");
        const statusText = appointment.status || "Pending";
        status.textContent = statusText;
        status.className = statusText.toLowerCase();

        row.append(doctor, speciality, date, status);
        container.appendChild(row);
    });
}


window.addEventListener("storage", function (event) {
    if (event.key === "careplusAppointments") {
        const savedUser = localStorage.getItem("careplusUser");

        if (savedUser) {
            loadPatientDashboard(JSON.parse(savedUser));
        }
    }
});
