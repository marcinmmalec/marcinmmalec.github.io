function closeBar() {
    const navbar = document.getElementById('collapsibleNavbar');
    if (navbar.classList.contains('show')) {
        /*navbar.classList.remove('show');*/
        $('.collapse').collapse('toggle');
    }
}

window.addEventListener("resize", addResize) 

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

addResize();