/**********************************************************************************
*
* Javascript file for modifying the navbar
*
***********************************************************************************/

/* Function that automaticly closes the collapsible navbar when a link is pressed */
function closeBar() {
    const navbar = document.getElementById('collapsibleNavbar');
    if (navbar.classList.contains('show')) {
        /*navbar.classList.remove('show');*/
        $('.collapse').collapse('toggle');
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
        x.forEach(a => {
            a.removeAttribute("onclick");
        });
    }
}
/* Have resize function run at least once */
addResize();