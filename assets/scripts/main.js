// Scroll to Top Button and Navbar Shadow Functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const navbar = document.getElementById('navbar');

    // Show/hide button and navbar shadow based on scroll position
    window.addEventListener('scroll', function () {
        const scrollY = window.pageYOffset;

        // Scroll to top button
        if (scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }

        // Navbar shadow - appears when scrolled
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});