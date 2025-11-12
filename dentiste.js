
// mAke nav menu hidden 
// Define The button
 let navbartoogle = document.querySelector('.navbar-toggle');

 let navbarMenu = document.querySelector('.navbar-menu');
// usoing the event 
 navbartoogle.addEventListener('click',() => 

    {
        navbartoogle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    
