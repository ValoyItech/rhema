// Navigation Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Animate hamburger bars
    if (hamburger.classList.contains('active')) {
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.backgroundColor = '#0047AB';
        hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        hamburger.style.transform = 'rotate(0)';
        hamburger.style.backgroundColor = '';
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = '';
    }
});

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.main-nav');
    const sidebarButton = document.querySelector('.hamburger');
    
    if (!sidebar.contains(event.target) && !sidebarButton.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Reset hamburger animation
        hamburger.style.transform = '';
        hamburger.style.backgroundColor = '';
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = '';
    }
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Gallery Sliders
const gallerySliders = document.querySelectorAll('.gallery-slider');

gallerySliders.forEach(slider => {
    const gallerySlides = slider.querySelectorAll('.gallery-slide');
    let currentGallerySlide = 0;
    
    function nextGallerySlide() {
        gallerySlides.forEach(slide => slide.classList.remove('active'));
        
        currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
        gallerySlides[currentGallerySlide].classList.add('active');
    }
    
    setInterval(nextGallerySlide, 3000);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Add animation to footer links
const footerLinks = document.querySelectorAll('.footer-links ul li a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.color = '#0047AB';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.color = '';
    });
});

// Add animation to footer social links
const footerSocialLinks = document.querySelectorAll('.footer-social a');
footerSocialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});