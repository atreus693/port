// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener to animate the header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // When user scrolls down 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
