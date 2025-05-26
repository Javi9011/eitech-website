// Manejar el menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Asegurar que el menú esté cerrado al cargar la página
if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle && mobileNav) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Manejar eventos de redimensionamiento
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (menuToggle && mobileNav) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// Asegurar que el menú esté cerrado al cargar la página
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }
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
