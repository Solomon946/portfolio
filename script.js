// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form validation and submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Skill Points Animation
const skillPoints = document.querySelectorAll('.skill-point');
skillPoints.forEach(point => {
    // Random movement animation
    setInterval(() => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        point.style.transform = `translate(${randomX}px, ${randomY}px)`;
        setTimeout(() => {
            point.style.transform = 'translate(0, 0)';
        }, 1000);
    }, 3000);
});

// Project Cards Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Responsive adjustments for cube and globe
function adjustResponsiveElements() {
    const width = window.innerWidth;
    const cubeContainer = document.querySelector('.cube-container');
    const globeContainer = document.querySelector('.globe-container');

    // Specific adjustments based on exact breakpoints
    if (width <= 480) {
        // Mobile adjustments
        if (cubeContainer) {
            cubeContainer.style.bottom = '5%';
            cubeContainer.style.right = '50%';
            cubeContainer.style.transform = 'translateX(50%)';
        }
    } else if (width <= 768) {
        // Tablet adjustments
        if (cubeContainer) {
            cubeContainer.style.bottom = '10%';
            cubeContainer.style.right = '50%';
            cubeContainer.style.transform = 'translateX(50%)';
            cubeContainer.style.top = 'auto';
        }
    } else if (width <= 1024) {
        // Small desktop adjustments
        if (cubeContainer) {
            cubeContainer.style.right = '5%';
            cubeContainer.style.top = '50%';
            cubeContainer.style.transform = 'translateY(-50%)';
            cubeContainer.style.bottom = 'auto';
        }
    } else {
        // Large desktop - default position
        if (cubeContainer) {
            cubeContainer.style.right = '10%';
            cubeContainer.style.top = '50%';
            cubeContainer.style.transform = 'translateY(-50%)';
            cubeContainer.style.bottom = 'auto';
        }
    }
}

// Run on load and resize
window.addEventListener('load', adjustResponsiveElements);
window.addEventListener('resize', adjustResponsiveElements);