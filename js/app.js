
/*
 * Define Global Variables
*/

//AM: the UL that will keep the menu is placed in HTML (id="navbar__list").
const navList = document.querySelector('#navbar__list');
// AM: Constant for storing a list of all sections. Build when loading the page
const sections = document.querySelectorAll('section');
let activeSection = 0
const navItems = navList.children;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Determines which section is in viewport amd applying style to active elements

document.addEventListener("scroll", ()=>{
    for (let el of sections){
        let bounding = el.getBoundingClientRect();
        if(bounding.top <300 & bounding.top >-300
        ){
            el.classList.add("active__class");
            activeSection = el;
        }
        else {el.classList.remove("active__class")}
    }
    return activeSection
})

// for (let el of navItems){
//     if(el.getAttribute("id")===activeSection.getAttribute("id")){
//         el.classList.add("active_nav")}
//         else {
//             el.classList.remove("active_nav")
//         }
// }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function building the nav

const navBuilder = function(){
for (let i=0; i<sections.length; i++) {
    const navItem = document.createElement('li');
    navItem.textContent = sections[i].dataset.nav;
    navList.appendChild(navItem);
    navItem.style.cssText='border: 1px solid; color: black; padding: 5px; margin: 5px; background-color: yellow;';
    navItem.addEventListener("click", e=>{
        const href = document.querySelector("#"+sections[i].getAttribute("id"));
        href.scrollIntoView({behavior: "smooth"});
        
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
