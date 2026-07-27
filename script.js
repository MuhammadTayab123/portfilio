// ====================================
// THEME MANAGEMENT
// ====================================
const THEME_KEY = 'portfolio-theme';
const THEME_COLORS = {
    dark: '#0A0E27',
    light: '#F8FAFC'
};
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = document.querySelector('.theme-toggle__icon');
const themeToggleText = document.querySelector('.theme-toggle__text');
const themeMeta = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme, shouldPersist = true) => {
    document.documentElement.setAttribute('data-theme', theme);

    if (themeMeta) {
        themeMeta.setAttribute('content', THEME_COLORS[theme]);
    }

    if (shouldPersist) {
        localStorage.setItem(THEME_KEY, theme);
    }

    if (!themeToggle || !themeToggleIcon || !themeToggleText) return;

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const nextThemeLabel = `Switch to ${nextTheme} theme`;
    themeToggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', nextThemeLabel);
    themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    themeToggleText.textContent = nextThemeLabel;
};

const initializeTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme, false);
};

initializeTheme();
requestAnimationFrame(() => {
    document.documentElement.classList.add('theme-ready');
});

if (themeToggle && themeToggleIcon) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

        themeToggleIcon.classList.add('is-switching');
        setTimeout(() => {
            setTheme(nextTheme);
            themeToggleIcon.classList.remove('is-switching');
        }, 150);
    });
}

// ====================================
// MOBILE MENU & NAVIGATION
// ====================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

const setMobileMenuState = (isOpen) => {
    if (!navLinks || !hamburger) return;
    navLinks.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const shouldOpen = !navLinks.classList.contains('active');
        setMobileMenuState(shouldOpen);
    });

    hamburger.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        const shouldOpen = !navLinks.classList.contains('active');
        setMobileMenuState(shouldOpen);
    });
}

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        setMobileMenuState(false);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        setMobileMenuState(false);
    }
});

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ====================================
// NAVBAR SCROLL EFFECT
// ====================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scroll-active');
    } else {
        navbar.classList.remove('scroll-active');
    }
});

// ====================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements for animation
const elementsToObserve = document.querySelectorAll('.project-card, .blog-card, .skill-category, .timeline-item, .stat-box, .contact-item');
elementsToObserve.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ====================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ====================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ====================================
// ANIMATE SKILL BARS ON SCROLL
// ====================================
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills');

    if (!skillsSection) return;

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s ease-out';
                        bar.style.width = width;
                    }, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
};

window.addEventListener('load', animateSkillBars);

// ====================================
// COUNTER ANIMATION FOR STATS
// ====================================
const animateStats = () => {
    const statBoxes = document.querySelectorAll('.stat-box h3');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = entry.target;
                target.classList.add('counted');
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;

                const increment = finalValue / 50;
                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(interval);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);

                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statBoxes.forEach(box => statsObserver.observe(box));
};

window.addEventListener('load', animateStats);

// ====================================
// CONTACT FORM SUBMISSION
// ====================================
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.disabled = true;

        try {
            const response = await fetch('send-email.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok && result.success) {
                button.textContent = '✓ Message Sent!';
                button.style.background = 'linear-gradient(135deg, #00d084, #00d084)';
                this.reset();

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 4000);
            } else {
                button.textContent = '✗ Error Sending';
                button.style.background = 'linear-gradient(135deg, #ff6b6b, #ff6b6b)';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            button.textContent = '✗ Error';
            button.style.background = 'linear-gradient(135deg, #ff6b6b, #ff6b6b)';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        }
    });
}

// ====================================
// RIPPLE EFFECT ON BUTTONS
// ====================================
document.querySelectorAll('.btn, .link-icon').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to styles
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ====================================
// LAZY LOAD IMAGES
// ====================================
const images = document.querySelectorAll('[style*="background"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.backgroundImage = entry.target.style.backgroundImage || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            imageObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '50px' });

images.forEach(img => imageObserver.observe(img));

// ====================================
// RESPONSIVE NAVBAR
// ====================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        setMobileMenuState(false);
    }
});

// ====================================
// KEYBOARD NAVIGATION
// ====================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        setMobileMenuState(false);
    }
});

// ====================================
// SCROLL TO TOP BUTTON
// ====================================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #667eea);
    border: none;
    border-radius: 50%;
    color: #0a0e27;
    font-size: 1.2rem;
    cursor: pointer;
    display: none;
    z-index: 998;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollToTopBtn.addEventListener('hover', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

// ====================================
// PERFORMANCE: PAGE LOAD TRACKING
// ====================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('✓ Portfolio website loaded successfully!');
});
