const form = document.getElementById("bookingForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const fields = ["name", "email", "phone", "date", "service"];
  let data = {};

  fields.forEach(id => {
    const input = document.getElementById(id);
    const error = input.nextElementSibling;

    if (input.value.trim() === "") {
      error.textContent = "This field is required";
      valid = false;
    } else {
      error.textContent = "";
      data[id] = input.value;
    }

    // Email validation
    if (id === "email" && input.value.trim() !== "") {
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!pattern.test(input.value)) {
        error.textContent = "Enter a valid email";
        valid = false;
      }
    }
  });

  if (valid) {
    // Replace YOUR_WEB_APP_URL with the Google Apps Script Web App URL
    fetch("YOUR_WEB_APP_URL", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(result => {
      successMsg.textContent = "Your appointment has been successfully booked!";
      form.reset();
    })
    .catch(error => {
      successMsg.textContent = "Error submitting the form, try again!";
      console.error(error);
    });
  }
});

