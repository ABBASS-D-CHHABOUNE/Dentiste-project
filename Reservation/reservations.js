const form = document.getElementById("bookingForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Validation logic here...
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
    if (id === "email" && input.value.trim() !== "") {
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!pattern.test(input.value)) {
        error.textContent = "Enter a valid email";
        valid = false;
      }
    }
  });

  if (!valid) return;

  // Use your Web App URL here:
  fecth("https://script.google.com/macros/s/AKfycbycI67_n8IpamHsTLN1dCd7GqkRAvK9PjVYoAGFmnYt8r4MGuJR9nnFCVV1WpfoPJX4gw/exec", {
    method: "POST",
    body: JSON.stringify(data),
    // Important: set content-type to plain text to avoid CORS issues
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    redirect: "follow"
  })
  .then(response => response.text())
  .then(result => {
    // The script likely returns something like a JSON string
    try {
      const obj = JSON.parse(result);
      console.log("Response from Apps Script:", obj);
    } catch (err) {
      console.warn("Could not parse response as JSON:", result);
    }
    successMsg.textContent = "Your appointment has been successfully booked!";
    form.reset();
  })
  .catch(error => {
    console.error("Error submitting:", error);
    successMsg.textContent = "Error submitting the form, try again!";
  });
});


