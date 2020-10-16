/**********************************************************************************
*
* Javascript file for modifying the navbar
*
***********************************************************************************/

/* Function that changes the navbar more button */
function changeIcon() {
    /* jQuery statement to get the navbar more button icon */
    /* Toggle change class in the icon element */
    $('#navbarIcon').toggleClass('change');
}
/* Function that automaticly closes the collapsible navbar when a link is pressed */
function closeBar() {
    const navbar = document.getElementById('collapsibleNavbar');
    /* If navbar is open, trigger bootstrap collaspe toggle */
    if (navbar.classList.contains('show')) {
        $('.collapse').collapse('toggle');
        /* Change close icon back to normal */
        changeIcon();
    }
}
/* Event listener that fires every time the screen resizes */
window.addEventListener("resize", addResize) 
/* Function that prepares the navbar for either small screens (collapsible) or larger screens (non-collapsible) */
function addResize() {
    let x = document.getElementsByClassName('nav-link');
    x = Array.from(x);
    let w = document.documentElement.clientWidth;
    if (w <= 767) {
        x.forEach(a => {
            a.setAttribute("onclick", 'closeBar()');
        });
    } else {
        closeBar();
        x.forEach(a => {
            a.removeAttribute("onclick");
        });
    }
}
/* Have resize function run at least once */
addResize();