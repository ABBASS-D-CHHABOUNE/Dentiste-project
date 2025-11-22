
// mAke nav menu hidden 
// Define The button Dentist css
 let navbartoogle = document.querySelector('.navbar-toggle');

 let navbarMenu = document.querySelector('.navbar-menu');
// usoing the event 
 navbartoogle.addEventListener('click',() => 

    {
        navbartoogle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    

// Fade up - About Css

    const aboutSection = document.querySelector('.about-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutSection.classList.add('show');
    }
  });
});

observer.observe(aboutSection);



// Animation Tada 

const target = document.querySelector('.notifi-content');

const tada = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            target.classList.add('active');
        }
    });
}, {
    threshold: 0.8  // play when 40% of element is visible
});

tada.observe(target);


// form validation

const form = document.getElementById('emailForm');
const emailInput = form.querySelector('.get-mail');
const errorMessage = form.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        // show warning
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = "block";
        emailInput.classList.add("error");
    } else {
        // valid email
        errorMessage.style.display = "none";
        emailInput.classList.remove("error");
        // You can submit the form here via AJAX or continue normal submission
        console.log("Email submitted:", emailValue);
    }
});




