export function showPortfolioMode(app) {
    app.hideAllScreens();
    document.getElementById('portfolio-mode').classList.remove('hidden');
    app.currentMode = 'portfolio';
    setupPortfolioEventListeners(app);
    setupPortfolioAnimations();
}

function setupPortfolioEventListeners(app) {
    // Mobile navigation
    setupMobileNavigation();
    // Form handling
    setupFormHandling();
    // Scroll animations
    setupScrollAnimations(app);
    // Portfolio navigation
    setupPortfolioNavigation();
}

function setupMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        // Remove existing event listeners
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        newHamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            newHamburger.classList.toggle('active');
            
            const spans = newHamburger.querySelectorAll('span');
            if (newHamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                newHamburger.classList.remove('active');
                
                const spans = newHamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            });
        });
    }
}

function setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    const formOutput = document.getElementById('form-output');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmission(contactForm, formOutput);
        });
    }
}

function setupScrollAnimations(app) {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger specific animations
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

function setupPortfolioNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 60; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.dataset.width || '70';
            bar.style.width = width + '%';
        }, index * 100);
    });
}

async function handleFormSubmission(form, output) {
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    // Show loading state
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/.netlify/functions/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Show success message
            output.classList.remove('hidden');
            form.reset();
        } else {
            // Show error message
            const errorOutput = document.createElement('div');
            errorOutput.className = 'error-message';
            errorOutput.textContent = 'An error occurred. Please try again.';
            form.appendChild(errorOutput);
        }
    } catch (error) {
        console.error(error);
        // Show error message
        const errorOutput = document.createElement('div');
        errorOutput.className = 'error-message';
        errorOutput.textContent = 'An error occurred. Please try again.';
        form.appendChild(errorOutput);
    } finally {
        // Hide loading state
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            output.classList.add('hidden');
        }, 5000);
    }
}

function setupPortfolioAnimations() {
    // Animate sections as they come into view
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('animate');
        }, index * 200);
    });

    // Animate skill bars
    setTimeout(() => {
        animateSkillBars();
    }, 1000);
}