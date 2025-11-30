

const form = document.getElementById("bookingForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data
  const data = {
    name: form.fullName.value,
    phone: form.phone.value,
    email: form.email.value,
    gender: form.gender.value,
    city: form.city.value,
    date: form.date.value,
    service: form.service.value
  };

  // Replace with your Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbzrdBQ6OeAmo9iat1_uKZT16n61g3F4EARZmehBR-lYjkNqoqPBoXLIu5EUxCDJMeg3/exec";

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.result === "success") {
      statusMsg.textContent = alert('✅ Your data has been sent successfully!');
      statusMsg.style.color = "green";
      form.reset();
    } else {
      throw new Error(result.message || "Failed to submit");
    }
  } catch (error) {
    console.error(error);
    statusMsg.textContent = "❌ An error occurred, please try again.";
    statusMsg.style.color = "red";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Book Appointment";
  }
});




