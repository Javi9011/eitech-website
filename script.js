// Manejar el menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Asegurar que el menú esté cerrado al cargar la página
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Asegurar que el menú se muestre/oculte correctamente
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'block';
        } else {
            navLinks.style.display = 'none';
        }
    });
}

// Cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            navLinks.style.display = 'none';
        }
    });
});

// Manejar eventos de redimensionamiento y scroll
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            navLinks.style.display = 'flex'; // Mostrar en escritorio
        }
    } else {
        // En móvil, asegurar que el menú esté oculto por defecto
        if (!menuToggle.classList.contains('active')) {
            navLinks.style.display = 'none';
        }
    }
});

// Asegurar que el menú esté cerrado al cargar la página
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Agregar sombra al header cuando se hace scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
