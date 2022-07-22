/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.getElementsByTagName('section')
let navBar = document.getElementById('navbar__list')
let docFrag = new DocumentFragment()


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function onClickingNav(e){
    const el = document.getElementById(e.target.getAttribute('data-link'))
    const scrollOff = el.offsetTop
    // Scroll to anchor ID using scrollTO event
    scroll({
        top:scrollOff,
        behavior:"smooth"
    })
}

// Set sections as active
// Add class 'active' to section when near top of viewport
function onScrolling(){
    let current = sections[0]
    let min = sections[0].offsetTop
    for (element of sections){
        let topOff=element.offsetTop
        if(Math.abs(scrollY-topOff)<min){
            min = Math.abs(scrollY-topOff)
            current=element
        }
    };
    const prevActive = document.querySelector('.your-active-class')
    prevActive.classList.remove('your-active-class')
    current.classList.add('your-active-class')


    const prevActiveLink = document.getElementById('l'+prevActive.getAttribute('id'))
    prevActiveLink.classList.remove('active')
    let navItem = document.getElementById('l'+current.getAttribute('id'))
    navItem.classList.add('active')
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
for(let sec of sections){
    let newEl = document.createElement('li')
    newEl.textContent=sec.getAttribute('data-nav')
    newEl.setAttribute('data-link',sec.getAttribute('id'))
    newEl.setAttribute('id','l'+sec.getAttribute('id'))  
    newEl.style.cssText='display:inline-block'
    newEl.classList.add('menu__link')
    docFrag.appendChild(newEl);
}


navBar.appendChild(docFrag)
navBar.addEventListener('click',onClickingNav)
document.addEventListener('scroll',onScrolling)



