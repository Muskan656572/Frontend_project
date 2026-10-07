document.addEventListener("DOMContentLoaded", function () {   // Ensure the DOM is fully loaded before executing the script

    const form = document.getElementById("dropdowns");

    const searchInput =
        document.getElementById("searchDoctor");

    const specialitySelect =
        document.getElementById("Speciality");

    const locationSelect =
        document.getElementById("location");

    const experienceSelect =
        document.getElementById("exp");

    const allDoctorsButton =
        document.getElementById("allDoctors");


    // =========================
    // SHOW DOCTORS
    // =========================

    function displayDoctors(list) {

        const cards = document.querySelectorAll(
            ".doctorsSection > div[class^='doc']"
        );

        cards.forEach(function (card, index) {

            const doctor = list[index];

            if (!doctor) {
                card.style.display = "none";
                return;
            }

            card.style.display = "";


            // image
            const image = card.querySelector(".docimg img");

            if (image) {
                image.src = doctor.image;
            }


            // name
            const name = card.querySelector(".spec h2");

            if (name) {
                name.textContent = doctor.name;
            }


            // speciality
            const speciality =
                card.querySelector(".spec p");

            if (speciality) {
                speciality.textContent =
                    doctor.specialityName;
            }


            // rating
            const rating =
                card.querySelector(".rating p");

            if (rating) {

                rating.firstChild.textContent =
                    doctor.rating + " ";

                const reviewSpan =
                    rating.querySelector("span");

                if (reviewSpan) {
                    reviewSpan.textContent =
                        "(" + doctor.reviews + " reviews)";
                }

            }


            // experience
            const experience =
                card.querySelector(".exp p");

            if (experience) {
                experience.textContent =
                    doctor.experience +
                    "+ Years Experience";
            }


            // clinic
            const clinic =
                card.querySelector(".loc p");

            if (clinic) {
                clinic.textContent =
                    doctor.clinic;
            }


            // slots
            const slots =
                card.querySelectorAll(".slots p");

            for (let i = 0; i < 3; i++) {

                if (slots[i]) {
                    slots[i].textContent =
                        doctor.slots[i];
                }

            }

            const viewButton = card.querySelector(".view");

            viewButton.setAttribute( "data-doctor", doctor.name );

        });

    }

    const doctorsSection = document.querySelector(".doctorsSection");

    doctorsSection.addEventListener("click", function(event) {

    const button = event.target.closest(".view"); // Find the closest ancestor with the class "view"

    if (!button) {
        return;
    }

    const doctorName = button.getAttribute("data-doctor");

    window.location.href = "./doctor-profile.html?doctor=" + encodeURIComponent(doctorName);

});


    // =========================
    // SEARCH
    // =========================

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();

        const specialityValue =
            specialitySelect.value
                .toLowerCase();

        const locationValue =
            locationSelect.value
                .toLowerCase();

        const experienceValue =
            experienceSelect.value;


        const filteredDoctors =
            doctors.filter(function (doctor) {


                const searchMatch =
                    searchValue === "" ||

                    doctor.name
                        .toLowerCase()
                        .includes(searchValue) ||

                    doctor.specialityName
                        .toLowerCase()
                        .includes(searchValue) ||

                    doctor.clinic
                        .toLowerCase()
                        .includes(searchValue);


                const specialityMatch =
                    specialityValue === "all" ||
                    doctor.speciality === specialityValue;


                const locationMatch =
                    locationValue === "all" ||
                    doctor.clinic
                        .toLowerCase()
                        .includes(locationValue);


                let experienceMatch = true;


                if (experienceValue === "1-5") {

                    experienceMatch =
                        doctor.experience >= 1 &&
                        doctor.experience <= 5;

                }

                else if (experienceValue === "6-10") {

                    experienceMatch =
                        doctor.experience >= 6 &&
                        doctor.experience <= 10;

                }

                else if (experienceValue === "11-15") {

                    experienceMatch =
                        doctor.experience >= 11 &&
                        doctor.experience <= 15;

                }

                else if (experienceValue === "16-20") {

                    experienceMatch =
                        doctor.experience >= 16 &&
                        doctor.experience <= 20;

                }

                else if (experienceValue === "20+") {

                    experienceMatch =
                        doctor.experience >= 20;

                }


                return (
                    searchMatch &&
                    specialityMatch &&
                    locationMatch &&
                    experienceMatch
                );

            });


        displayDoctors(filteredDoctors);

    });


    // =========================
    // ALL DOCTORS
    // =========================

    allDoctorsButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            searchInput.value = "";
            specialitySelect.value = "all";
            locationSelect.value = "all";
            experienceSelect.value = "all";

            displayDoctors(doctors);

        }
    );


    // =========================
    // FIRST LOAD
    // =========================

    displayDoctors(doctors);

});