// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.reveal, .reveal-card, .reveal-step, .reveal-faq');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== FAQ TOGGLE =====
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== PARALLAX EFFECT =====
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== NUMBER COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
const speed = 200;

const countUp = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;
    
    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => countUp(counter), 10);
    } else {
        counter.innerText = target;
    }
};

const startCounters = () => {
    counters.forEach(counter => {
        const counterTop = counter.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (counterTop < windowHeight && !counter.classList.contains('counted')) {
            counter.classList.add('counted');
            countUp(counter);
        }
    });
};

window.addEventListener('scroll', startCounters);
window.addEventListener('load', startCounters);

// ===== TYPING EFFECT =====
const typingElements = document.querySelectorAll('.typing-effect');

typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    };
    
    // Start typing when element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                type();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(element);
});

// ===== HOVER EFFECTS =====
const hoverElements = document.querySelectorAll('.feature-card, .problem-card');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== SMOOTH LOAD =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== INTERSECTION OBSERVER FOR LAZY ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add stagger effect for children
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('visible');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.smooth-appear').forEach(el => {
    observer.observe(el);
});

// ===== DYNAMIC YEAR =====
const yearElements = document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();
yearElements.forEach(el => el.textContent = currentYear);

// ===== PREVENT FORM RESUBMISSION =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
    }
    ticking = true;
}

function updateAnimations() {
    ticking = false;
    // Update animations here
}

window.addEventListener('scroll', requestTick);
window.addEventListener('resize', requestTick);