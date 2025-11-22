const form = document.getElementById("bookingForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const fields = ["name", "email", "phone", "date", "service"];
  fields.forEach(id => {
    const input = document.getElementById(id);
    const error = input.nextElementSibling;

    if (input.value.trim() === "") {
      error.textContent = "This field is required";
      valid = false;
    } else {
      error.textContent = "";
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
    successMsg.textContent = "Your appointment has been successfully booked!";
    form.reset();
  }
});
