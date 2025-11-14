
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

