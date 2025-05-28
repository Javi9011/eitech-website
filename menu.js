document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Ajustar el padding del body para evitar contenido debajo del menú
        if (navLinks.classList.contains('active')) {
            document.body.style.paddingTop = '60px';
        } else {
            document.body.style.paddingTop = '0';
        }
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar el menú cuando se hace clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            toggleMenu();
        }
    });

    // Cerrar el menú cuando se hace scroll
    window.addEventListener('scroll', function() {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Ajustar el menú cuando cambia el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});
