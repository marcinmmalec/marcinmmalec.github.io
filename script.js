/* Add event listener for window resizing */
window.addEventListener("resize", resizeNav);
/* Function that changes which nav menu is displayed */
function resizeNav () {
    var w = document.documentElement.clientWidth;
    //var h = document.documentElement.clientHeight;
    //console.log("Window size: width= " + w + ", height= " + h);
    /* If width is at most 800px, display the mobile nav bar, otherwise use the normal nav bar */
    if (w <= 800) {
        document.getElementById("nav_bar").style.display = "none";
        document.getElementById("mobile_nav_bar").style.display = "block";
    } else {
        document.getElementById("nav_bar").style.display = "block";
        document.getElementById("mobile_nav_bar").style.display = "none";
    }
}
// Run the resize function once on page load
resizeNav();
