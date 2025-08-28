// Portfolio Interactive JavaScript
// Advanced features with particle effects, animations, and modern interactions

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoadingScreen();
    initializeParticles();
    initializeTypingEffect();

    initializeScrollAnimations();
    initializeInteractiveElements();
    initializeNavigation();
    initializeBackToTop();
    initializeStatsCounter();
    initializeSkillFilters();
    initializeProjectFilters();
});

// Loading Screen
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// Particle Background
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Typing Effect
function initializeTypingEffect() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'DevOps Engineer',
                'Cloud Architect',
                'CI/CD Specialist',
                'Infrastructure Developer',
                'Automation Expert'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}



// Scroll Animations with GSAP
function initializeScrollAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            gsap.fromTo(section, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
        
        // Animate skill progress bars
        gsap.utils.toArray('.progress-bar').forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: progress + '%',
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: bar,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
        
        // Parallax effect for hero section
        gsap.to('.floating-cards', {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }
}

// Interactive Elements
function initializeInteractiveElements() {
    // Tech cards hover effects
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1) rotate(5deg)';
            card.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
    
    // Project cards hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
    
    // Skill items hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.background = '';
        });
    });
}

// Navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}



// Back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Stats counter animation
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = current.toFixed(2);
        }, 20);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseFloat(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Skill filters
function initializeSkillFilters() {
    const filterButtons = document.querySelectorAll('.skill-nav-btn');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter skills
            skillCategories.forEach(categoryEl => {
                if (category === 'all' || categoryEl.getAttribute('data-category') === category) {
                    categoryEl.style.display = 'block';
                    categoryEl.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    categoryEl.style.display = 'none';
                }
            });
        });
    });
}

// Project filters
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}



// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Contact Functions - Button handlers
document.addEventListener('DOMContentLoaded', function() {
    // Prevent clicks on contact items from interfering with buttons
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });
    
    // Add click event listeners for contact buttons
    const contactButtons = document.querySelectorAll('.contact-link');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Contact button clicked:', this.textContent);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add fallback for email and phone
    const emailButton = document.querySelector('button[onclick*="mailto:"]');
    const phoneButton = document.querySelector('button[onclick*="tel:"]');
    
    if (emailButton) {
        emailButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(() => {
                const email = 'shivanarayanps@gmail.com';
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        showNotification('Email copied to clipboard!', 'success');
                    }).catch(() => {
                        showNotification('Email: ' + email, 'info');
                    });
                }
            }, 2000);
        });
    }
    
    if (phoneButton) {
        phoneButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(() => {
                const phoneNumber = '+919841045679';
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(phoneNumber).then(() => {
                        showNotification('Phone number copied to clipboard!', 'success');
                    }).catch(() => {
                        showNotification('Phone: ' + phoneNumber, 'info');
                    });
                }
            }, 2000);
        });
    }
});

// Notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

// Service Worker for PWA features (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
