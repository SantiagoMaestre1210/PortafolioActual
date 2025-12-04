/* 
╔══════════════════════════════════════════════════════════════════╗
║              FUNCIONALIDAD DEL PORTAFOLIO                        ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Este archivo contiene toda la lógica JavaScript del portafolio. ║
║  NO modificar a menos que sepas lo que estás haciendo.           ║
║                                                                  ║
║  Funcionalidades incluidas:                                      ║
║  ✅ Loader inicial                                               ║
║  ✅ Menú hamburguesa responsive                                  ║
║  ✅ Modo oscuro/claro                                            ║
║  ✅ Animaciones al hacer scroll                                  ║
║  ✅ Validación de formulario                                     ║
║  ✅ Efecto de escritura automática                               ║
║  ✅ Smooth scrolling                                             ║
║  ✅ Filtro de proyectos                                          ║
║  ✅ Contador animado                                             ║
║  ✅ Header con scroll                                            ║
║  ✅ Scroll to top button                                         ║
║  ✅ Barras de progreso animadas                                  ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
*/

// Ocultar loader lo antes posible
(function() {
    var loader = document.getElementById('loader');
    
    function hideLoader() {
        if (loader) {
            loader.classList.add('hidden');
        }
    }
    
    // Si ya está cargado, ocultar inmediatamente
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        // Escuchar evento load
        window.addEventListener('load', function() {
            setTimeout(hideLoader, 200);
        });
    }
    
    // Fallback absoluto: siempre ocultar después de 1.5 segundos
    setTimeout(hideLoader, 1500);
})();

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initMenu();
    initDarkMode();
    initScrollAnimations();
    initTypingEffect();
    initSmoothScroll();
    initProjectFilters();
    initContactForm();
    initScrollHeader();
    initScrollTop();
    initSkillBars();
    initCounters();
    initCurrentYear();
    initActiveNavLink();
});

/* ==================== MENÚ HAMBURGUESA ==================== */
function initMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Abrir menú
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }

    // Cerrar menú con botón X
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

/* ==================== MODO OSCURO/CLARO ==================== */
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Cargar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Toggle tema
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Escuchar cambios en preferencia del sistema
    prefersDark.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

/* ==================== ANIMACIONES AL SCROLL ==================== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(element) {
        observer.observe(element);
    });
}

/* ==================== EFECTO DE ESCRITURA ==================== */
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;

    // ✏️ EDITAR TÍTULOS: Modifica estos textos para personalizarlos
    const texts = [
        'Desarrollador Full Stack',
        'Desarrollador Backend',
        'Desarrollador Frontend',
        'Estudiante Apasionado'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pausa al final
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pausa antes del siguiente texto
        }

        setTimeout(type, typingSpeed);
    }

    // Iniciar efecto después de un pequeño delay
    setTimeout(type, 1000);
}

/* ==================== SMOOTH SCROLL ==================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==================== FILTRO DE PROYECTOS ==================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.projects__filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Actualizar botón activo
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(function(card) {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* ==================== FORMULARIO DE CONTACTO ==================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Limpiar errores previos
        clearErrors();

        // Obtener valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validar
        let isValid = true;

        if (!name) {
            showError('name', 'El nombre es requerido');
            isValid = false;
        } else if (name.length < 2) {
            showError('name', 'El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }

        if (!email) {
            showError('email', 'El email es requerido');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Por favor ingresa un email válido');
            isValid = false;
        }

        if (!subject) {
            showError('subject', 'El asunto es requerido');
            isValid = false;
        }

        if (!message) {
            showError('message', 'El mensaje es requerido');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        }

        if (isValid) {
            // Simular envío (aquí puedes integrar un servicio real)
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Enviando...</span>';

            setTimeout(function() {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                
                // Mostrar mensaje de éxito
                formSuccess.classList.add('show');
                
                // Limpiar formulario
                form.reset();

                // Ocultar mensaje después de 5 segundos
                setTimeout(function() {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 1500);
        }
    });

    function showError(field, message) {
        const input = document.getElementById(field);
        const errorElement = document.getElementById(field + '-error');
        
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        const inputs = form.querySelectorAll('.form__input');
        const errors = form.querySelectorAll('.form__error');
        
        inputs.forEach(function(input) {
            input.classList.remove('error');
        });
        
        errors.forEach(function(error) {
            error.textContent = '';
        });
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Limpiar error al escribir
    const inputs = form.querySelectorAll('.form__input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorElement = document.getElementById(this.id + '-error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });
}

/* ==================== HEADER CON SCROLL ==================== */
function initScrollHeader() {
    const header = document.querySelector('.header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar
}

/* ==================== SCROLL TO TOP ==================== */
function initScrollTop() {
    const scrollTopButton = document.getElementById('scroll-top');

    function handleScroll() {
        if (window.scrollY > 500) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    }

    window.addEventListener('scroll', handleScroll);

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==================== BARRAS DE PROGRESO ==================== */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill__progress');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.setProperty('--progress-width', progress + '%');
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(function(bar) {
        observer.observe(bar);
    });
}

/* ==================== CONTADORES ANIMADOS ==================== */
function initCounters() {
    const counters = document.querySelectorAll('.hero__stat-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(function(counter) {
        observer.observe(counter);
    });

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const timer = setInterval(function() {
            current += increment;
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
}

/* ==================== AÑO ACTUAL ==================== */
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* ==================== NAVEGACIÓN ACTIVA ==================== */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function highlightNavLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Ejecutar al cargar
}

/* ==================== PARALLAX SIMPLE ==================== */
window.addEventListener('scroll', function() {
    const shapes = document.querySelectorAll('.hero__shape');
    const scrolled = window.scrollY;

    shapes.forEach(function(shape, index) {
        const speed = (index + 1) * 0.1;
        shape.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
    });
});
