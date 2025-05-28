document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Cerrar el menú cuando se hace scroll
    window.addEventListener('scroll', function() {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});
