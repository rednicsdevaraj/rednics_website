// Carousel functionality for the Hero section
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Hide all slides and reset active state
        slides.forEach(slide => {
            slide.setAttribute('data-active', 'false');
            slide.style.opacity = 0;
            slide.style.display = 'none';
        });

        // De-activate all dots
        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });

        // Show the current slide and activate the current dot
        slides[index].setAttribute('data-active', 'true');
        slides[index].style.display = 'block';
        slides[index].style.opacity = 1;
        dots[index].style.opacity = 1;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startCarousel() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopCarousel() {
        clearInterval(slideInterval);
    }

    // Event listeners for carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel(); // Stop auto-slide on manual click
            currentSlide = index;
            showSlide(currentSlide);
            startCarousel(); // Restart auto-slide
        });
    });

    // Initial load
    showSlide(currentSlide);
    startCarousel();
});

// Accordion functionality for the Services section
function toggleAccordion(id) {
    const content = document.getElementById(id + '-accordion');
    const icon = document.getElementById(id + '-icon');
    const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (isExpanded) {
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}


// Mobile menu functionality
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    const navLinks = document.getElementById('navigation-links');
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
});