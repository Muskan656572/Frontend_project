const params = new URLSearchParams(window.location.search);

const doctorName = params.get("doctor");

const doctor = doctors.find(function (item) {
    return item.name === doctorName;
});


if (doctor) {

    document.getElementById("appointmentDoctorName").textContent = doctor.name;

    document.getElementById("appointmentDoctorSpeciality").textContent = doctor.specialityName;

    document.getElementById("appointmentDoctorRating").textContent = doctor.rating;

    document.getElementById("appointmentDoctorReviews").textContent = `(${doctor.reviews} Reviews)`;

    document.getElementById("appointmentDoctorDescription").textContent = doctor.description;

    document.getElementById("appointmentDoctorLocation").textContent = doctor.location;

    document.getElementById("appointmentDoctorExperience").textContent = `${doctor.experience}+ Years Experience`;

    document.getElementById("appointmentDoctorImage").src = doctor.image;
}
const appointmentUser = localStorage.getItem("careplusUser");

const logIn = localStorage.getItem("careplusLoggedIn");

if (logIn !== "true") {

    alert("Please login first to book an appointment.");

    window.location.href = "./login.html";
}

if (appointmentUser !== null) {

    const user = JSON.parse(appointmentUser);

    document.getElementById("patientName").value = user.name;

    document.getElementById("patientEmail").value = user.email;

}

// to set the minimum date for the appointment date input to today's date
const dateInput = document.getElementById("appointmentDate");

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();
    const error = document.getElementById("appointmentError");
    error.textContent = "";
    if (!doctor) {
        error.textContent = "Please select a valid doctor.";
        return;
    }

    const name = document.getElementById("patientName").value.trim();

    const email = document.getElementById("patientEmail").value.trim();

    const phone = document.getElementById("patientPhone").value.trim();

    const date = document.getElementById("appointmentDate").value;

    const time = document.getElementById("appointmentTime").value;

    const reason = document.getElementById("appointmentReason").value.trim();


    


    if (name === "") {
        error.textContent = "Please enter your full name.";
        return;
    }

    if (email === "") {
        error.textContent = "Please enter your email.";
        return;
    }

    if (phone === "") {
        error.textContent = "Please enter your phone number.";
        return;
    }

    if (date === "") {
        error.textContent = "Please select appointment date.";
        return;
    }

    if (time === "") {
        error.textContent = "Please select appointment time.";
        return;
    }

    if (reason === "") {
        error.textContent = "Please enter reason for visit.";
        return;
    }


    const appointment = {

        id: Date.now(),

        doctor: doctor.name,

        doctorEmail: doctor.email || "",
        
        doctorImage: doctor.image || "",

        speciality: doctor.specialityName,

        patientName: name,

        patientEmail: email,

        patientPhone: phone,

        date: date,

        time: time,

        reason: reason,

        status: "pending"
    };


    const existingAppointments =
        JSON.parse(
            localStorage.getItem("careplusAppointments")
        ) || [];


    existingAppointments.push(appointment);


    localStorage.setItem(
        "careplusAppointments",
        JSON.stringify(existingAppointments)
    );


    alert("Appointment booked successfully!");


    window.location.href =
        "./patient-appointments.html";

});