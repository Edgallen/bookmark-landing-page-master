/*=============== SHOW MENU ===============*/ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
        navToggle.classList.add('hide')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('hide')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== FEATURES SORTING ===============*/
const featuresItems = document.querySelectorAll('.features__item');
const featuresCards = document.querySelectorAll('.features__card');

for (i = 0; i < featuresItems.length; i++) {

    featuresItems[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        // Getting data-filter
        const filter = e.target.dataset.filter;

        // Changing selected card
        featuresCards.forEach((card)=> { 
            if (card.classList.contains(filter)){
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });

        // Selecting active link
        featuresItems.forEach((item)=> { 
            if (item.classList.contains(filter)){
                item.classList.add('active-link');
            } else {
                item.classList.remove('active-link');
            }
        });
    });
};