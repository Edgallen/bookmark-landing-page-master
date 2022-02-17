/*=============== SHOW MENU ===============*/ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLogo = document.getElementById('nav-logo')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
        navToggle.classList.add('hide');
        navLogo.classList.add('hide');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('hide');
        navLogo.classList.remove('hide');
    })
}