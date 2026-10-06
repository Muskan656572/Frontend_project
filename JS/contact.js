const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const subject =
        document.getElementById("contactSubject").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();

    const errorMessage =
        document.getElementById("contactError");


    // Clear old error
    errorMessage.textContent = "";


    // Name empty
    if (name === "") {
        errorMessage.textContent =
            "Please enter your name.";
        return;
    }


    // Email empty
    if (email === "") {
        errorMessage.textContent =
            "Please enter your email address.";
        return;
    }


    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent =
            "Please enter a valid email address.";
        return;
    }


    // Subject empty
    if (subject === "") {
        errorMessage.textContent =
            "Please enter a subject.";
        return;
    }


    // Message empty
    if (message === "") {
        errorMessage.textContent =
            "Please enter your message.";
        return;
    }


    // Create query object
    const query = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        reply: ""
    };


    // Save query
    localStorage.setItem(
        "careplusQuery",
        JSON.stringify(query)
    );


    alert("Your query has been submitted successfully!");


    // Clear form
    contactForm.reset();

});