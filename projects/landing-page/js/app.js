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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
var sections = document.getElementsByTagName('section')
var navBar = document.getElementById('navbar__list')
var docFrag = new DocumentFragment()


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function onClickingNav(e){
    const el = document.getElementById(e.target.getAttribute('data-link'))
    const scrollOff = el.offsetTop
    scroll({
        top:scrollOff,
        behavior:"smooth"
    })
}


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
}

// build the nav
for(let sec of sections){
    let newEl = document.createElement('li')
    newEl.textContent=sec.getAttribute('data-nav')
    newEl.setAttribute('data-link',sec.getAttribute('id'))
    newEl.style.cssText='display:inline-block'
    newEl.classList.add('menu__link')
    docFrag.appendChild(newEl);
}
navBar.appendChild(docFrag)
navBar.addEventListener('click',onClickingNav)
document.addEventListener('scroll',onScrolling)
console.log('done')

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


