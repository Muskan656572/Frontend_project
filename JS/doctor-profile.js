const params = new URLSearchParams(window.location.search);

const doctorName = params.get("doctor");

const doctor =
    doctors.find(function(item) {

        return item.name === doctorName;

    });

if (doctor) {

    document.getElementById("profileDoctorName").textContent =
        doctor.name;

    document.getElementById("profileDoctorSpeciality").textContent =
        doctor.specialityName;
    
    document.getElementById("profileDoctorDescription").textContent =
        doctor.description;

    document.getElementById("profileDoctorImage").src =
        doctor.image;

    document.getElementById("profileDoctorRating").textContent =
        doctor.rating;

    document.getElementById("profileDoctorReviews").textContent =
        "(" + doctor.reviews + " Reviews)";

    document.getElementById("profileDoctorExperience").textContent =
        doctor.experience + "+ Years";

    document.getElementById("profileDoctorHospital").textContent =
        doctor.clinic;

    document.getElementById("profileDoctorLocation").textContent =
        doctor.location;
    
    document.getElementById("specialization1").textContent = doctor.specializations[0];
    document.getElementById("specialization2").textContent = doctor.specializations[1];
    document.getElementById("specialization3").textContent = doctor.specializations[2];
    document.getElementById("specialization4").textContent = doctor.specializations[3];

    document.getElementById("doctorProfileAbout").textContent = doctor.about;

    document.getElementById("degree1").textContent = doctor.education[0]["degree"];
    document.getElementById("college1").textContent = doctor.education[0]["college"];
    document.getElementById("degree2").textContent = doctor.education[1]["degree"];

    document.getElementById("day1").textContent = doctor.availability[0]["day"];
    document.getElementById("time1").textContent = doctor.availability[0]["time"];

    document.getElementById("day2").textContent = doctor.availability[1]["day"];
    document.getElementById("time2").textContent = doctor.availability[1]["time"];

    document.getElementById("day3").textContent = doctor.availability[2]["day"];
    document.getElementById("time3").textContent = doctor.availability[2]["time"];

}
const bookButton = document.querySelector(".book-btn");

if (bookButton && doctor) {

    bookButton.href =
        "./appointment.html?doctor=" +
        encodeURIComponent(doctor.name);

}