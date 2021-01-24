
/*
 * Define Global Variables
*/
//AM: the UL that will keep the menu taken from HTML
const navList = document.querySelector('#navbar__list');
//AM: Constant for storing a list of all sections. Build when loading the page
const sections = document.querySelectorAll('section');

/*
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Determines which section is in viewport amd applies style to active elements

document.addEventListener("scroll", ()=>{
    for (let el of sections){
        let bounding = el.getBoundingClientRect();
        let activeLink = document.querySelector(`[data-link="${el.dataset.nav}"]`)//this gets the navigation li that corresponds to the active section based on the dataset attributes//
        if(bounding.top <300 & bounding.top >-300
        ){
            el.classList.add("active__class");//style for section
            activeLink.classList.add("active_nav")//style for nav bar item
        }
        else {
            el.classList.remove("active__class");
            activeLink.classList.remove("active_nav")
        }
    }

})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function building the nav

const navBuilder = function(){
for (let i=0; i<sections.length; i++) {
    const navItem = document.createElement('li');
    navItem.innerHTML =`<a href="#${sections[i].id}" class="menu__link" data-link="${sections[i].dataset.nav}"> ${sections[i].dataset.nav}</a>`;
    navList.appendChild(navItem);
    navItem.addEventListener("click", e=>{
        const href = document.querySelector("#"+sections[i].getAttribute("id"));
        href.scrollIntoView({behavior: "smooth"});s
    })

}}

document.addEventListener('DOMContentLoaded',navBuilder)

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//TO DO
/* 24.01
- removed the additional active class (the dotted border)
- removed unnecessary variables like navItems, activeSection
- replaced the way item on the nav is built from .innerText to .innerHTML and added the <a> attribute within (there was none earlier, just the)
- created a variable inside the for of sections (activeLink) that gets the navlist item corresponding to active class and gives it an active class
- removed the css classes added earlier - the starter pack had it all
- removed unnecessary and commmented out text
*/