//  navar javascript code
document.addEventListener('DOMContentLoaded', function () {
    var navbarNav = document.getElementById('navbarNav');
    var offcanvasNavbar = document.getElementById('offcanvasNavbar');
    
    if (navbarNav && offcanvasNavbar) {
        navbarNav.addEventListener('click', function (event) {
            if (event.target.tagName === 'A' && event.target.classList.contains('nav-link')) {
                var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
                if (offcanvas) {
                    offcanvas.hide();
                }
            }
        });
    }
});
