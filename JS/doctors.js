document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("searchInput");

    const specialitySelect =
        document.getElementById("specialitySelect");

    const locationSelect =
        document.querySelector("#locationSelect select");

    const experienceSelect =
        document.querySelector("#experienceSelect select");

    const searchBtn =
        document.getElementById("search-btn");


    // ==========================================
    // EXISTING 9 CARDS
    // ==========================================

    const cards = document.querySelectorAll(
        ".frow > div, .srow > div, .trow > div"
    );


    // ==========================================
    // FIRST 9 DOCTORS
    // ==========================================

    const featuredDoctors = [
        "Dr. Priya Sharma",
        "Dr. Rahul Mehta",
        "Dr. Ananya Singh",
        "Dr. Arjun Kapoor",
        "Dr. Neha Verma",
        "Dr. Rohan Gupta",
        "Dr. Kanika Garg",
        "Dr. Ankush Sharma",
        "Dr. Poornima Mehta"
    ];


    // ==========================================
    // DISPLAY DOCTORS IN EXISTING CARDS
    // ==========================================

    function displayDoctors(list) {

        cards.forEach(function (card, index) {

            const doctor = list[index];


            // Agar is card ke liye doctor nahi hai
            // to card hide kar do

            if (!doctor) {

                card.style.display = "none";

                return;
            }


            // Doctor hai to card show karo

            card.style.display = "";


            // --------------------------
            // IMAGE
            // --------------------------

            const image =
                card.querySelector(".img1 img");

            if (image) {

                image.src = doctor.image;

                image.alt = doctor.name;

            }


            // --------------------------
            // NAME
            // --------------------------

            const name =
                card.querySelector(".text2 h4");

            if (name) {

                name.textContent =
                    doctor.name;

            }


            // --------------------------
            // SPECIALITY
            // --------------------------

            const speciality =
                card.querySelector(".spec");

            if (speciality) {

                speciality.textContent =
                    doctor.specialityName;

            }


            // --------------------------
            // RATING
            // --------------------------

            const rating =
                card.querySelector(".rating");

            if (rating) {

                rating.innerHTML = `
                    <i class="fa-solid fa-star"></i>
                    ${doctor.rating}
                    (${doctor.reviews} reviews)
                `;

            }


            // --------------------------
            // EXPERIENCE
            // --------------------------

            const experience =
                card.querySelector(".experience");

            if (experience) {

                experience.innerHTML = `
                    <i class="fa-solid fa-calendar"></i>
                    ${doctor.experience}+ Years Experience
                `;

            }


            // --------------------------
            // LOCATION
            // --------------------------

            const location =
                card.querySelector(".location");

            if (location) {

                location.innerHTML = `
                    <i class="fa-solid fa-location-dot"></i>
                    ${doctor.location}
                `;

            }


            // --------------------------
            // VIEW PROFILE
            // --------------------------

            const viewButton =
                card.querySelector(".view");

            if (viewButton) {

                viewButton.setAttribute(
                    "data-doctor",
                    doctor.name
                );

            }

        });

    }


    // ==========================================
    // FILTER
    // ==========================================

    function filterDoctors() {

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();


        const specialityValue =
            specialitySelect.value
                .toLowerCase()
                .trim();


        const locationValue =
            locationSelect.value
                .toLowerCase()
                .trim();


        const experienceValue =
            experienceSelect.value;


        const filteredDoctors =
            doctors.filter(function (doctor) {


                // ==================================
                // SEARCH
                // ==================================

                const searchMatch =
                    searchValue === "" ||

                    doctor.name
                        .toLowerCase()
                        .includes(searchValue) ||

                    doctor.specialityName
                        .toLowerCase()
                        .includes(searchValue) ||

                    doctor.location
                        .toLowerCase()
                        .includes(searchValue);


                // ==================================
                // SPECIALITY
                // ==================================

                const specialityMatch =
                    specialityValue === "" ||

                    doctor.speciality
                        .toLowerCase() ===
                    specialityValue;


                // ==================================
                // LOCATION
                // ==================================

                const doctorLocation =
                    doctor.location
                        .toLowerCase()
                        .replace(/[^a-z]/g, "");


                const selectedLocation =
                    locationValue
                        .replace(/[^a-z]/g, "");


                const locationMatch =
                    locationValue === "" ||

                    doctorLocation.includes(
                        selectedLocation
                    );


                // ==================================
                // EXPERIENCE
                // ==================================

                let experienceMatch = true;


                if (experienceValue === "1-3") {

                    experienceMatch =
                        doctor.experience >= 1 &&
                        doctor.experience <= 3;

                }


                else if (experienceValue === "4-6") {

                    experienceMatch =
                        doctor.experience >= 4 &&
                        doctor.experience <= 6;

                }


                else if (experienceValue === "7-10") {

                    experienceMatch =
                        doctor.experience >= 7 &&
                        doctor.experience <= 10;

                }


                else if (experienceValue === "10+") {

                    experienceMatch =
                        doctor.experience >= 10;

                }


                // ==================================
                // FINAL RESULT
                // ==================================

                return (
                    searchMatch &&
                    specialityMatch &&
                    locationMatch &&
                    experienceMatch
                );

            });


        // Filtered doctors ko existing cards mein show karo

        displayDoctors(filteredDoctors);

    }


    // ==========================================
    // SEARCH BUTTON
    // ==========================================

   searchBtn.addEventListener("click", function (event) {

    event.preventDefault();

    console.log("Search button clicked");

    filterDoctors();

});


    // ==========================================
    // SPECIALITY
    // ==========================================

    specialitySelect.addEventListener(
        "change",
        filterDoctors
    );


    // ==========================================
    // LOCATION
    // ==========================================

    locationSelect.addEventListener(
        "change",
        filterDoctors
    );


    // ==========================================
    // EXPERIENCE
    // ==========================================

    experienceSelect.addEventListener(
        "change",
        filterDoctors
    );


    // ==========================================
    // VIEW PROFILE
    // ==========================================

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".view");


            if (!button) {
                return;
            }


            const doctorName =
                button.getAttribute("data-doctor");


            if (!doctorName) {
                return;
            }


            window.location.href =
                "./doctor-profile.html?doctor=" +
                encodeURIComponent(doctorName);

        }
    );


    // ==========================================
    // PAGE LOAD
    // ==========================================

    const initialDoctors =
        featuredDoctors
            .map(function (name) {

                return doctors.find(function (doctor) {

                    return doctor.name === name;

                });

            })
            .filter(function (doctor) {

                return doctor !== undefined;

            });


    displayDoctors(initialDoctors);

});